import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username: string = 'user@example.com';
  public password: string = 'password';

  constructor(public authService: AuthService, public cookieService: CookieService) {}

  public submit() {
    this.authService.cookieLogin(this.username, this.password);
  }
}
