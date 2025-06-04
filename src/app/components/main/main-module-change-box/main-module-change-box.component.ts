import { Component, inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MainService } from '../../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-module-change-box',
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatToolbarModule, MatListModule],
  templateUrl: './main-module-change-box.component.html',
  styleUrl: './main-module-change-box.component.scss'
})
export class MainModuleChangeBoxComponent {

  public data = inject(MAT_DIALOG_DATA);

  constructor(
    private mainService: MainService,
    private router: Router
  ) {}

  changeModule(id: any) {
    this.mainService.changeModuleUser(id).subscribe({
      complete: () => {
        window.location.href = 'main'
      }
    })
  }

  checkModule(id: any): boolean {
    if (this.data.user.module_id == id) {
      return true
    }
    return false
  }

}
