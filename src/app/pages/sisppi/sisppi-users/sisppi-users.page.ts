import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SisppiService } from '../../../services/sisppi.service';
import { SesadmService } from '../../../services/sesadm.service';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { SisppiUsersUpdateUserBoxComponent } from '../../../components/sisppi/sisppi-users-update-user-box/sisppi-users-update-user-box.component';
import { SisppiUsersCreateUserBoxComponent } from '../../../components/sisppi/sisppi-users-create-user-box/sisppi-users-create-user-box.component';
import { SisppiUsersChangeRolesBoxComponent } from '../../../components/sisppi/sisppi-users-change-roles-box/sisppi-users-change-roles-box.component';
import { SisppiUsersDeleteUserBoxComponent } from '../../../components/sisppi/sisppi-users-delete-user-box/sisppi-users-delete-user-box.component';

const sisppiUsersChannel = new BroadcastChannel('sisppi-users-channel');

@Component({
  selector: 'app-sisppi-users',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
  templateUrl: './sisppi-users.page.html',
  styleUrl: './sisppi-users.page.scss'
})
export class SisppiUsersPage {

  constructor(
    private dialog: MatDialog,
    private sisppiService: SisppiService,
    private sesadmService: SesadmService,
  ) {}

  ngOnInit(): void {
    sisppiUsersChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.getUsers()
      }
    }
    this.getUsers()
    this.getRoles()
  }

  displayedColumns: string[] = ['name', 'email', 'is_valid', 'actions'];
  dataSource: any
  getUsers() {
    this.openLoadingBox()
    this.sisppiService.getUsers().subscribe({
      next: (response) => {
        console.log(response)
        this.dataSource = new MatTableDataSource(response)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  roles: any
  getRoles() {
    this.sisppiService.getRoles().subscribe({
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
    this.dialog.open(SisppiUsersCreateUserBoxComponent, {
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
    this.dialog.open(SisppiUsersUpdateUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user
      }
    });
  }

  openChangeRolesBox(user: any) {
    this.dialog.open(SisppiUsersChangeRolesBoxComponent, {
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
    this.dialog.open(SisppiUsersDeleteUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user
      }
    });
  }

}
