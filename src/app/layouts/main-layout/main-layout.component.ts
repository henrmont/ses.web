import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent} from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { MainService } from '../../services/main.service';
import { MainModuleChangeBoxComponent } from '../../components/main/main-module-change-box/main-module-change-box.component';
import { MainAboutBoxComponent } from '../../components/main/main-about-box/main-about-box.component';
import { MainChangePictureBoxComponent } from '../../components/main/main-change-picture-box/main-change-picture-box.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatListModule, MatSidenavModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  module = this.route.snapshot.data['user'].module
  user = this.route.snapshot.data['user']

  constructor(
    private authService: AuthService,
    private mainService: MainService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getFlashNotifications()
    this.checkModuleStatus()
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.localStorage.clear()
      },
      complete: () => {
        window.location.reload();
      }
    })
  }

  flash_notifications: any
  getFlashNotifications() {
    this.mainService.getFlashNotifications().subscribe({
      next: (response) => {
        this.flash_notifications = response
      }
    })
  }

  openChangeModuleBox() {
    this.dialog.open(MainModuleChangeBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: this.user,
      },
    });
  }

  openAboutBox() {
    this.dialog.open(MainAboutBoxComponent, {
      width: '800px',
      disableClose: true,
      autoFocus: false,
    });
  }

  moduleStatus = true
  checkModuleStatus() {
    this.mainService.getUserModule(this.user.module_id).subscribe({
      next: (response) => {
        const url = fetch(response.url, { method: 'GET', mode: 'no-cors' })
        url.then((res) => {
          this.moduleStatus = false
        })
      },
    })
  }

  event!: any
  onFileSelected(event: any) {
    this.event = event;
    this.changeImageProfile(this.user)
  }

  changeImageProfile(info: any) {
    this.dialog.open(MainChangePictureBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info,
        event: this.event
      }
    })
  }

}
