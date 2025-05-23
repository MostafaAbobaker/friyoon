import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private _http:HttpClient) { }


  getContactInfo():Observable<any> {
    return this._http.get('ContactInfo/GetContactInfo')
  }

  updataContactInfo(form:any):Observable<any> {
    return this._http.put(`ContactInfo/UpdateContactInfo`, form)
  }
}
