// src/app/interceptors/token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; // Adjust the path as necessary
import { HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Inject AuthService to get the token

  // Retrieve the token
  const token = authService.getToken();

  // Clone the request and add the Authorization header if the token exists
  const authReq = token ? req.clone({
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  }) : req;

  return next(authReq);
};
