import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const BaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is on its way to ${req.url}`);
  const modifiedReq = req.clone({
    url: environment.baseUrl + req.url,
  });
  return next(modifiedReq);
};
