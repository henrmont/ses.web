import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';

@Component({
  selector: 'app-sisppi-roles-change-permissions-box',
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatListModule],
  templateUrl: './sisppi-roles-change-permissions-box.component.html',
  styleUrl: './sisppi-roles-change-permissions-box.component.scss'
})
export class SisppiRolesChangePermissionsBoxComponent {

  data = inject(MAT_DIALOG_DATA);

  constructor(
    private sesadmService: SesadmService,
  ) {}

  havePermission(role: any) {
    let validate = false
    for (const element of this.data.role.permissions) {
      if (element.id == role.id) {
        validate = true
      }
    }
    return validate
  }

  changePermissionToRole(permission: any) {
    this.sesadmService.changePermissionToRole('sisppi', permission.id, this.data.role.id).subscribe()
  }

}
