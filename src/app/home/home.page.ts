import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username: string = '';
  public password: string = '';

  constructor(public authService: AuthService) {}

  public submit() {
    this.authService.cookieLogin(this.username, this.password);
  }
}
