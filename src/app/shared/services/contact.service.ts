import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly cacheContactInfo = 'ContactInfo';
  private isBrowser: boolean;

  constructor(private _http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

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

    return this._http.get('ContactInfo/GetContactInfo').pipe(
      tap(data => {
        if (this.isBrowser) {
          sessionStorage.setItem(this.cacheContactInfo, JSON.stringify(data));
        }
      })
    );
  }

  clearContactInfoCache(): void {
    if (this.isBrowser) {
      sessionStorage.removeItem(this.cacheContactInfo);
    }
  }
}
