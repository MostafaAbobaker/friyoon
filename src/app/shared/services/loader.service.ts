import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  /* isLoading = new Subject<boolean>();
  constructor() { }
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false) ;
  } */


#loadingSignal = signal<boolean>(false);
  loading = this.#loadingSignal.asReadonly();

  show() {
    this.#loadingSignal.set(true);
  }

  hide() {
    this.#loadingSignal.set(false);
  }



}
