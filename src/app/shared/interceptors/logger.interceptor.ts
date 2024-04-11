import { HttpInterceptorFn } from '@angular/common/http';

export const LoggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is on its way to ${req.url}`);

  return next(req);
};
