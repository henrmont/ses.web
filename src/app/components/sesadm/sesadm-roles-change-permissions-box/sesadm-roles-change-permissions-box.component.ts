import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sesadm-roles-change-permissions-box',
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatListModule],
  templateUrl: './sesadm-roles-change-permissions-box.component.html',
  styleUrl: './sesadm-roles-change-permissions-box.component.scss'
})
export class SesadmRolesChangePermissionsBoxComponent {

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
    this.sesadmService.changePermissionToRole('sesadm', permission.id, this.data.role.id).subscribe()
  }



}
