import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private _http: HttpClient ){

  }

<<<<<<< HEAD
  getContact(): Observable<any> {
    return this._http.get('ContactInfo/GetContactInfo');
  }

  getContact_sessionStorage(forceRefresh: boolean = false): Observable<any> {
    if (this.isBrowser) {
      const cachedData = sessionStorage.getItem(this.cacheContactInfo);
      if (cachedData && !forceRefresh) {
        return of(JSON.parse(cachedData));
      }
    }
=======
>>>>>>> EditHeader


  getContact(): Observable<any> {
  return this._http.get('ContactInfo/GetContactInfo')
  }


}
