import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {

}
