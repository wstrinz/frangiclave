import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  public cookieLogin(username, password) {
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    let requestOptions = { headers: headers, withCredentials: true };

    let body = new URLSearchParams();
    body.set('user[email]', username);
    body.set('user[password]', password);
    body.set('commit', 'Log in');

    this.http
      .post(`${this.apiBase}/users/sign_in`, body.toString(), requestOptions)
      .subscribe(resp => console.log('goodresp!', resp), error => console.log('badresp!', error));
  }

  public getUsers() {
    let headers = new HttpHeaders({
      Accept: 'application/json',
    });
    let requestOptions = { headers: headers, withCredentials: true };
    this.http
      .get(`${this.apiBase}/users`, requestOptions)
      .subscribe(resp => console.log('user good resp!', resp), error => console.log('user badresp!', error));
  }

  public get apiBase() {
    return 'https://9e22bf5c.ngrok.io';
  }
}
