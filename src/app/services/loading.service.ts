import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);

  isLoading$: Observable<boolean> = this.loading.asObservable();

  hide(): void {
    this.loading.next(false);
  }

  show(): void {
    this.loading.next(true);
  }
}
