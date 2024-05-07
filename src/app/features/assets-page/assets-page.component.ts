import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-assets-page',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './assets-page.component.html',
  styleUrl: './assets-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetsPageComponent {}
