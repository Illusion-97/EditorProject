import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentToken = this.auth.getToken()
    // Si le service auth renvoie un token et que la requête interceptée est en direction d'API_URL
    if (request.url.startsWith(environment.API_URL) && currentToken) {
      // on clone la requête en lui ajoutant un header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentToken}`
        }
      })
    }
    // on laisse passer la requête
    return next.handle(request).pipe(catchError((err, caught) => {
      // Si l'appel a l'API résulte par l'erreur UNAUTHORIZED, on déconnecte l'utilisateur
      if (err.status === 401) {
        this.auth.logout()
      }
      return caught;
    }));
  }
}
