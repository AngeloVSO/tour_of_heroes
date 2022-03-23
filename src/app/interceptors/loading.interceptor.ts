import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequest = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.activeRequest === 0) {
      this.loadingService.show();
    }

    this.activeRequest++;

    return next.handle(request).pipe(
      finalize(() => {
        if (this.activeRequest === 1) {
          this.loadingService.hide();
        }

        this.activeRequest--;
      })
    );
  }
}
