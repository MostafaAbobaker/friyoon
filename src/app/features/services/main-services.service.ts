import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  constructor(private _http:HttpClient) { }

  getMainServices():Observable<any>{
    return this._http.get('Category/GetAllCategories');

  }
}
