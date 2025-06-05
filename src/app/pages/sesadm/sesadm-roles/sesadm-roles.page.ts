import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SesadmRolesCreateRoleBoxComponent } from '../../../components/sesadm/sesadm-roles-create-role-box/sesadm-roles-create-role-box.component';
import { SesadmService } from '../../../services/sesadm.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SesadmRolesUpdateRoleBoxComponent } from '../../../components/sesadm/sesadm-roles-update-role-box/sesadm-roles-update-role-box.component';
import { SesadmRolesChangePermissionsBoxComponent } from '../../../components/sesadm/sesadm-roles-change-permissions-box/sesadm-roles-change-permissions-box.component';
import { SesadmRolesDeleteRoleBoxComponent } from '../../../components/sesadm/sesadm-roles-delete-role-box/sesadm-roles-delete-role-box.component';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';

const restrictRoles = [
  'sesadm/sesadm',
  'sesadm/sistfd',
  'sesadm/sisppi',
]

const sesadmRolesChannel = new BroadcastChannel('sesadm-roles-channel');

@Component({
  selector: 'app-sesadm-roles',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatTableModule, MatInputModule, MatTooltipModule],
  templateUrl: './sesadm-roles.page.html',
  styleUrl: './sesadm-roles.page.scss'
})
export class SesadmRolesPage implements OnInit {

  constructor(
    private dialog: MatDialog,
    private sesadmService: SesadmService,
    // private router: Router
  ) { }

  ngOnInit(): void {
    sesadmRolesChannel.onmessage = (message) => {
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
    this.dialog.open(SesadmRolesCreateRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
    });
  }

  displayedColumns: string[] = ['name', 'actions'];
  dataSource: any
  getRoles() {
    this.openLoadingBox()
    this.sesadmService.getRoles('sesadm').subscribe({
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
    this.sesadmService.getPermissions('sesadm').subscribe({
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
    this.dialog.open(SesadmRolesUpdateRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        role: role
      }
    });
  }

  openChangePermissionsBox(role: any) {
    this.dialog.open(SesadmRolesChangePermissionsBoxComponent, {
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
    this.dialog.open(SesadmRolesDeleteRoleBoxComponent, {
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
