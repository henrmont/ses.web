import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sesadm-layout',
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sesadm-layout.component.html',
  styleUrl: './sesadm-layout.component.scss'
})
export class SesadmLayoutComponent {

}
