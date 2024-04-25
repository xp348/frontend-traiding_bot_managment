import { ChangeDetectionStrategy, Component } from '@angular/core';
declare const Plotly: any;
@Component({
  selector: 'app-text-plotly',
  standalone: true,
  imports: [],
  templateUrl: './text-plotly.component.html',
  styleUrl: './text-plotly.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPlotlyComponent {
  ngOnInit(): void {
    let TESTER = document.getElementById('tester');
    TESTER &&
      Plotly.newPlot(TESTER, [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16],
        },
      ]);
  }
}
