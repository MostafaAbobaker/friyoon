import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiUrl;
  let modifiedReq: HttpRequest<unknown>;

  modifiedReq = req.clone({
    url: `${baseUrl}${req.url}`,
  });
  return next(modifiedReq);
};
