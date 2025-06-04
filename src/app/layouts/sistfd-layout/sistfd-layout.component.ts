import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sistfd-layout',
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sistfd-layout.component.html',
  styleUrl: './sistfd-layout.component.scss'
})
export class SistfdLayoutComponent {

}
