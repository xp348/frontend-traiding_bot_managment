import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-text-angular-material',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './text-angular-material.component.html',
  styleUrl: './text-angular-material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAngularMaterialComponent {}
