import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BotSettingsComponent } from './bot-settings/bot-settings.component';
@Component({
  selector: 'app-bots-page',
  standalone: true,
  imports: [BotSettingsComponent, SideMenuComponent, MatTabsModule],
  templateUrl: './bots-page.component.html',
  styleUrl: './bots-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotsPageComponent {}
