import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  countSelector,
  updatedAtSelector,
} from '../../core/store/counter/counter.selectors';
import { map } from 'rxjs';
import {
  clear,
  decrease,
  increase,
} from '../../core/store/counter/counter.actions';

@Component({
  selector: 'app-text-ng-rx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-ng-rx.component.html',
  styleUrl: './text-ng-rx.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextNgRxComponent implements OnDestroy {
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);
  constructor(private store: Store) {}
  ngOnDestroy(): void {
    // count$
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}
