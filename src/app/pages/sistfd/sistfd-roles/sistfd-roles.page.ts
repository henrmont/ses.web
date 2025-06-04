import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SesadmService } from '../../../services/sesadm.service';
import { SistfdService } from '../../../services/sistfd.service';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { SistfdRolesCreateRoleBoxComponent } from '../../../components/sistfd/sistfd-roles-create-role-box/sistfd-roles-create-role-box.component';
import { SistfdRolesUpdateRoleBoxComponent } from '../../../components/sistfd/sistfd-roles-update-role-box/sistfd-roles-update-role-box.component';
import { SistfdRolesChangePermissionsBoxComponent } from '../../../components/sistfd/sistfd-roles-change-permissions-box/sistfd-roles-change-permissions-box.component';
import { SistfdRolesDeleteRoleBoxComponent } from '../../../components/sistfd/sistfd-roles-delete-role-box/sistfd-roles-delete-role-box.component';

const restrictRoles = [
  'sesadm/sistfd',
]

@Component({
  selector: 'app-sistfd-roles',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatTableModule, MatInputModule, MatTooltipModule],
  templateUrl: './sistfd-roles.page.html',
  styleUrl: './sistfd-roles.page.scss'
})
export class SistfdRolesPage {

  constructor(
    private dialog: MatDialog,
    private sesadmService: SesadmService,
    private sistfdService: SistfdService
  ) { }

  ngOnInit(): void {
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
    this.dialog.open(SistfdRolesCreateRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
    });
  }

  displayedColumns: string[] = ['name', 'actions'];
  dataSource: any
  getRoles() {
    this.openLoadingBox()
    this.sistfdService.getRoles().subscribe({
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
    this.sistfdService.getPermissions().subscribe({
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
    this.dialog.open(SistfdRolesUpdateRoleBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        role: role
      }
    });
  }

  openChangePermissionsBox(role: any) {
    this.dialog.open(SistfdRolesChangePermissionsBoxComponent, {
      width: '800px',
      disableClose: true,
      autoFocus: false,
      data: {
        role: role,
        permissions: this.permissions
      }
    });
  }

  openDeleteRoleBox(role: any) {
    this.dialog.open(SistfdRolesDeleteRoleBoxComponent, {
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
