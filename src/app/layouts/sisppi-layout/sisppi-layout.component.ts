import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sisppi-layout',
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sisppi-layout.component.html',
  styleUrl: './sisppi-layout.component.scss'
})
export class SisppiLayoutComponent {

}
