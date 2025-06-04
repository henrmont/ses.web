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
export class MainService {

  constructor(
    private http: HttpClient,
  ) { }

  changeModuleUser(id: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiCoreUrl}/user/change/module/user/${id}`, {headers: requestOptions})
  }

  getUserModule(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/module/get/user/module/${id}`, {headers: requestOptions})
  }

  getUserModules(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/module/get/user/modules`, {headers: requestOptions})
  }

  getChats(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/chat/get/chats`, {headers: requestOptions})
  }

  getChat(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/chat/get/chat/${id}`, {headers: requestOptions})
  }

  registerMessage(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiCoreUrl}/chat/register/message`, data, {headers: requestOptions})
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/chat/get/users`, {headers: requestOptions})
  }

  getUserChat(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/chat/get/user/chat/${id}`, {headers: requestOptions})
  }

  getNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/notification/get/notifications`, {headers: requestOptions})
  }

  deleteNotification(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiCoreUrl}/notification/delete/notification/${id}`, {headers: requestOptions})
  }

  getFlashNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiCoreUrl}/notification/get/flash/notifications`, {headers: requestOptions})
  }

  changeInfo(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiCoreUrl}/profile/change/info`, data, {headers: requestOptions})
  }

  changePicture(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiCoreUrl}/profile/change/picture`, data, {headers: requestOptions})
  }

  getArticles() {
    return this.http.get<any>(`${environment.apiCoreUrl}/article/get/articles`, {headers: requestOptions})
  }

  getArticle(id: any) {
    return this.http.get<any>(`${environment.apiCoreUrl}/article/get/article/${id}`, {headers: requestOptions})
  }
}
