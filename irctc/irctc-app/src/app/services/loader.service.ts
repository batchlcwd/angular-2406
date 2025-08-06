import { Inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private requestCount = 0;
  private _loading = signal(false); // ✅ this is the signal

  readonly loading = this._loading; // expose it

  show() {
    this.requestCount++;
    if (this.requestCount === 1) {
      this._loading.set(true);
    }
  }

  hide() {
    this.requestCount = Math.max(0, this.requestCount - 1);
    if (this.requestCount === 0) {
      this._loading.set(false);
    }
  }
}
