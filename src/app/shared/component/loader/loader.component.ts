import { Component, effect, inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  /* loaderService$ = inject(LoaderService);

  isLoading : Observable<boolean> = this.loaderService$.isLoading.asObservable();

  ngAfterViewInit(): void {
  } */


  loaderService = inject(LoaderService);
  loading = this.loaderService.loading;

  /* constructor() {
    effect(() => {
      console.log('loading => ', this.loading());
    });
  } */
}
