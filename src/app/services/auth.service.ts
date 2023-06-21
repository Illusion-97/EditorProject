import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {

  }

  logout() {

  }

  register(user: User) {

  }
}
