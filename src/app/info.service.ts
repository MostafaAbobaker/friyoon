import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private _http:HttpClient) { }

  getInfo() :Observable<any>{
    return this._http.get('ContactInfo/GetContactInfo')

  }
}
