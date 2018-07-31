import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username: string = 'user@example.com';
  public password: string = 'password';
  public users = [];

  constructor(public apiService: ApiService, public cookieService: CookieService) {}

  public submit() {
    this.apiService.cookieLogin(this.username, this.password);
  }

  public fetchUsers() {
    this.apiService.getUsers();
  }
}
