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
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiCoreUrl}/auth/login`, data)
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/auth/get/user/${id}`)
  }

  logout() {
    return this.http.get<any>(`${environment.apiCoreUrl}/auth/logout`, {headers: requestOptions})
  }

  me(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/auth/me`, {headers: requestOptions})
  }

  refresh(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/auth/refresh`, {headers: requestOptions})
  }

  sendVerificationCode(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiCoreUrl}/auth/send/verification/code`, data, {headers: requestOptions})
  }

  checkVerificationCode(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiCoreUrl}/auth/check/verification/code`, data, {headers: requestOptions})
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiCoreUrl}/auth/reset/password`, data, {headers: requestOptions})
  }
}
