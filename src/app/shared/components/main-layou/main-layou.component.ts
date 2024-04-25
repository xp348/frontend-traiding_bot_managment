import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layou',
  standalone: true,
  templateUrl: './main-layou.component.html',
  styleUrl: './main-layou.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SideMenuComponent, TopBarComponent, RouterOutlet],
})
export class MainLayouComponent {}
