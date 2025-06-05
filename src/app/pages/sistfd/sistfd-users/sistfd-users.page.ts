import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SesadmService } from '../../../services/sesadm.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { SistfdUsersCreateUserBoxComponent } from '../../../components/sistfd/sistfd-users-create-user-box/sistfd-users-create-user-box.component';
import { SistfdUsersUpdateUserBoxComponent } from '../../../components/sistfd/sistfd-users-update-user-box/sistfd-users-update-user-box.component';
import { SistfdUsersChangeRolesBoxComponent } from '../../../components/sistfd/sistfd-users-change-roles-box/sistfd-users-change-roles-box.component';
import { SistfdUsersDeleteUserBoxComponent } from '../../../components/sistfd/sistfd-users-delete-user-box/sistfd-users-delete-user-box.component';
import { SistfdService } from '../../../services/sistfd.service';

const sistfdUsersChannel = new BroadcastChannel('sistfd-users-channel');

@Component({
  selector: 'app-sistfd-users',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
  templateUrl: './sistfd-users.page.html',
  styleUrl: './sistfd-users.page.scss'
})
export class SistfdUsersPage {

  constructor(
    private dialog: MatDialog,
    private sistfdService: SistfdService,
    private sesadmService: SesadmService,
  ) {}

  ngOnInit(): void {
    sistfdUsersChannel.onmessage = (message) => {
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
    this.sistfdService.getUsers().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  roles: any
  getRoles() {
    this.sistfdService.getRoles().subscribe({
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
    this.dialog.open(SistfdUsersCreateUserBoxComponent, {
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
    this.dialog.open(SistfdUsersUpdateUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user
      }
    });
  }

  openChangeRolesBox(user: any) {
    this.dialog.open(SistfdUsersChangeRolesBoxComponent, {
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
    this.dialog.open(SistfdUsersDeleteUserBoxComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: {
        user: user
      }
    });
  }
}
