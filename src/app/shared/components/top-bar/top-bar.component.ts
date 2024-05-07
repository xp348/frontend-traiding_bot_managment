import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MapperPipe } from '../../pipes/mapper.pipe';
import { RouterModule } from '@angular/router';
import { ICON_PATH, IconPathType } from '../../../core/tokens/icon-path.token';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MapperPipe, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(@Inject(ICON_PATH) public iconPathMapper: IconPathType) {}
}
