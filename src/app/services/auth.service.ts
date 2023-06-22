import { Injectable } from '@angular/core';
import {User, UserResponse} from "../models/user";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.API_URL

  private $currentUser: BehaviorSubject<UserResponse | undefined> = new BehaviorSubject<UserResponse | undefined>(undefined)
  currentUser: Observable<UserResponse | undefined> = this.$currentUser.asObservable()
    .pipe(tap(currentUser => this.saveCurrentUser(currentUser)))
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    return this.http.post<UserResponse>(`${this.URL}login`,{email, password})
      .pipe(
        tap( response => {
          this.$currentUser.next(response)
        }),
        map(response => response.user.username)
      )
  }

  saveCurrentUser(currentUser?: UserResponse) {
    if(currentUser)
      sessionStorage.setItem("CURRENT_USER", JSON.stringify(currentUser))
    else
      sessionStorage.removeItem("CURRENT_USER")
  }

  logout() {
    this.$currentUser.next(undefined)
  }

  register(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.URL}register`,user)
  }
}
