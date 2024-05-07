import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-forecasts-page',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './forecasts-page.component.html',
  styleUrl: './forecasts-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastsPageComponent {}
