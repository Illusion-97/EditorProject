import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUsername: Observable<string>;
  constructor(private service : AuthService) {
    this.currentUsername = service.currentUser
      .pipe(map(userResponse => userResponse?.user.username || 'Anonyme'))
  }
}
