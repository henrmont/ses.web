import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SisppiService } from '../../../services/sisppi.service';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { SisppiRolesCreateRoleBoxComponent } from '../../../components/sisppi/sisppi-roles-create-role-box/sisppi-roles-create-role-box.component';
import { SisppiRolesUpdateRoleBoxComponent } from '../../../components/sisppi/sisppi-roles-update-role-box/sisppi-roles-update-role-box.component';
import { SisppiRolesChangePermissionsBoxComponent } from '../../../components/sisppi/sisppi-roles-change-permissions-box/sisppi-roles-change-permissions-box.component';
import { SisppiRolesDeleteRoleBoxComponent } from '../../../components/sisppi/sisppi-roles-delete-role-box/sisppi-roles-delete-role-box.component';

const restrictRoles = [
  'sesadm/sisppi',
]

const sisppiRolesChannel = new BroadcastChannel('sisppi-roles-channel');

@Component({
  selector: 'app-sisppi-roles',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatTableModule, MatInputModule, MatTooltipModule],
  templateUrl: './sisppi-roles.page.html',
  styleUrl: './sisppi-roles.page.scss'
})
export class SisppiRolesPage {

  constructor(
    private dialog: MatDialog,
    private sisppiService: SisppiService
  ) { }

  ngOnInit(): void {
    sisppiRolesChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.getRoles()
      }
    }
    this.getRoles()
    this.getPermissions()
  }

  openLoadingBox() {
    this.dialog.open(LoadingBoxComponent, {
      width: '100px',
      height: '200px',
      disableClose: true,
      autoFocus: false,
    });
  }

  openCreateRoleBox() {
    this.dialog.open(SisppiRolesCreateRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
    });
  }

  displayedColumns: string[] = ['name', 'actions'];
  dataSource: any
  getRoles() {
    this.openLoadingBox()
    this.sisppiService.getRoles().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  permissions: any
  getPermissions() {
    this.sisppiService.getPermissions().subscribe({
      next: (response) => {
        this.permissions = response
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openUpdateRoleBox(role: any) {
    this.dialog.open(SisppiRolesUpdateRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        role: role
      }
    });
  }

  openChangePermissionsBox(role: any) {
    this.dialog.open(SisppiRolesChangePermissionsBoxComponent, {
      width: '800px',
      disableClose: true,
      autoFocus: false,
      data: {
        role: role,
        permissions: this.permissions
      }
    }).afterClosed().subscribe(() => {
      this.getRoles()
    });
  }

  openDeleteRoleBox(role: any) {
    this.dialog.open(SisppiRolesDeleteRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        role: role
      }
    });
  }

  checkRestrictRole(role: any) {
    if (restrictRoles.includes(role)) {
      return false
    }
    return true
  }

}
