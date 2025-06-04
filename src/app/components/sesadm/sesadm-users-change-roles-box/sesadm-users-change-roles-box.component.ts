import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SesadmService } from '../../../services/sesadm.service';

@Component({
  selector: 'app-sesadm-users-change-roles-box',
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatListModule, MatSlideToggleModule],
  templateUrl: './sesadm-users-change-roles-box.component.html',
  styleUrl: './sesadm-users-change-roles-box.component.scss'
})
export class SesadmUsersChangeRolesBoxComponent {
  public data = inject(MAT_DIALOG_DATA);

  constructor(
    private sesadmService: SesadmService
  ) {}

  hasRole(roles: any, role: any) {
    let validate = false
    if (roles) {
      for (const element of roles) {
        if (element.id == role.id) {
          validate = true
        }
      };
      return validate
    } else {
      return false
    }
  }

  changeRoleToUser(role: any) {
    this.sesadmService.changeRoleToUser('sesadm', role.id, this.data.user.id).subscribe()
  }

}
