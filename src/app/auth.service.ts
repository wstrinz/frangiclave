import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
      .post('http://localhost:3000/users/sign_in', body.toString(), requestOptions)
      .subscribe(resp => console.log('goodresp!', resp), error => console.log('badresp!', error));
  }
}
