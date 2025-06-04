import { Component } from '@angular/core';
import { AuthLoginLoginBoxComponent } from "../../../components/auth/auth-login-login-box/auth-login-login-box.component";

@Component({
  selector: 'app-auth-login',
  imports: [AuthLoginLoginBoxComponent],
  templateUrl: './auth-login.page.html',
  styleUrl: './auth-login.page.scss'
})
export class AuthLoginPage {

}
