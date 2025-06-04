import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

const requestOptions = {
  'Authorization': `Bearer ${window.localStorage.getItem('token')}`
}

@Injectable({
  providedIn: 'root'
})
export class SistfdService {

  constructor(
    private http: HttpClient,
  ) { }

  // Usuários
  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiSistfdUrl}/user/get/users`, {headers: requestOptions})
  }

  // Regras
  getRoles(): Observable<any> {
    return this.http.get<any>(`${environment.apiSistfdUrl}/role/get/roles`, {headers: requestOptions})
  }

  getPermissions(): Observable<any> {
    return this.http.get<any>(`${environment.apiSistfdUrl}/role/get/permissions`, {headers: requestOptions})
  }
}
