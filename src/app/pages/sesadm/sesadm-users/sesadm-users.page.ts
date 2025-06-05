import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SesadmService } from '../../../services/sesadm.service';
import { SesadmUsersChangeModulesBoxComponent } from '../../../components/sesadm/sesadm-users-change-modules-box/sesadm-users-change-modules-box.component';
import { SesadmUsersChangeRolesBoxComponent } from '../../../components/sesadm/sesadm-users-change-roles-box/sesadm-users-change-roles-box.component';
import { SesadmUsersDeleteUserBoxComponent } from '../../../components/sesadm/sesadm-users-delete-user-box/sesadm-users-delete-user-box.component';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { SesadmUsersCreateUserBoxComponent } from '../../../components/sesadm/sesadm-users-create-user-box/sesadm-users-create-user-box.component';
import { SesadmUsersUpdateUserBoxComponent } from '../../../components/sesadm/sesadm-users-update-user-box/sesadm-users-update-user-box.component';

const sesadmUsersChannel = new BroadcastChannel('sesadm-users-channel');

@Component({
  selector: 'app-sesadm-users',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatTableModule, MatInputModule, MatTooltipModule, MatSlideToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sesadm-users.page.html',
  styleUrl: './sesadm-users.page.scss'
})
export class SesadmUsersPage implements OnInit {

  constructor(
    private dialog: MatDialog,
    private sesadmService: SesadmService,
  ) {}

  ngOnInit(): void {
    sesadmUsersChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.getUsers()
      }
    }
    this.getUsers()
    this.getModules()
    this.getRoles()
  }

  displayedColumns: string[] = ['name', 'email', 'is_valid', 'actions'];
  dataSource: any
  getUsers() {
    this.openLoadingBox()
    this.sesadmService.getUsers().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  modules: any
  getModules() {
    this.sesadmService.getModules().subscribe({
      next: (response) => {
        this.modules = response
      },
    })
  }

  roles: any
  getRoles() {
    this.sesadmService.getRoles('sesadm').subscribe({
      next: (response) => {
        this.roles = response
      }
    })
  }

  openLoadingBox() {
    this.dialog.open(LoadingBoxComponent, {
      width: '100px',
      height: '200px',
      disableClose: true,
      autoFocus: false,
    });
  }

  openCreateUserBox() {
    this.dialog.open(SesadmUsersCreateUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeValidUser(id: any) {
    this.sesadmService.changeValidUser('sesadm',id).subscribe()
  }

  openUpdateUserBox(user: any) {
    this.dialog.open(SesadmUsersUpdateUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user
      }
    });
  }

  openChangeModulesBox(user: any) {
    this.dialog.open(SesadmUsersChangeModulesBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user,
        modules: this.modules
      }
    }).afterClosed().subscribe(() => {
      this.getUsers()
    });
  }

  openChangeRolesBox(user: any) {
    this.dialog.open(SesadmUsersChangeRolesBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user,
        roles: this.roles
      }
    }).afterClosed().subscribe(() => {
      this.getUsers()
    });
  }

  openDeleteUserBox(user: any) {
    this.dialog.open(SesadmUsersDeleteUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user
      }
    });
  }

}
