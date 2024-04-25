import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ICON_PATH, IconPathType } from '../../../core/tokens/icon-path.token';
import { MapperPipe } from '../../pipes/mapper.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapperPipe, RouterModule],
})
export class SideMenuComponent {
  constructor(@Inject(ICON_PATH) public iconPathMapper: IconPathType) {}
}
