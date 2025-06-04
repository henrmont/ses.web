import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';

@Component({
  selector: 'app-sistfd-roles-change-permissions-box',
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatListModule],
  templateUrl: './sistfd-roles-change-permissions-box.component.html',
  styleUrl: './sistfd-roles-change-permissions-box.component.scss'
})
export class SistfdRolesChangePermissionsBoxComponent {

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
    this.sesadmService.changePermissionToRole('sistfd', permission.id, this.data.role.id).subscribe()
  }

}
