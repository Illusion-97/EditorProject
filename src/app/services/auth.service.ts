import { Injectable } from '@angular/core';
import {User, UserResponse} from "../models/user";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.API_URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.URL}login`,{email, password})
  }

  logout() {

  }

  register(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.URL}register`,user)
  }
}
