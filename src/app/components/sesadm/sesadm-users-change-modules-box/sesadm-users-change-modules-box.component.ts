import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-sesadm-users-change-modules-box',
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatListModule, MatSlideToggleModule],
  templateUrl: './sesadm-users-change-modules-box.component.html',
  styleUrl: './sesadm-users-change-modules-box.component.scss'
})
export class SesadmUsersChangeModulesBoxComponent {
  data = inject(MAT_DIALOG_DATA);

  constructor(
    private sesadmService: SesadmService
  ) {}

  checkUserModule(module: any) {
    let userModule = false
    for (const element of this.data.user.modules) {
      if (element.id == module.id) {
        userModule = true
      }
    }
    return userModule
  }

  changeUserModule(module_id: any) {
    this.sesadmService.changeUserModule(module_id, this.data.user.id).subscribe()
  }
}
