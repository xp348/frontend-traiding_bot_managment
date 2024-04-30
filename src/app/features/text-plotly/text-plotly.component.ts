import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { LineChartComponent } from '../../shared/components/line-chart/line-chart.component';
import { CandlestickChartComponent } from '../../shared/components/candlestick-chart/candlestick-chart.component';

@Component({
  selector: 'app-text-plotly',
  standalone: true,
  imports: [LineChartComponent, CandlestickChartComponent],
  templateUrl: './text-plotly.component.html',
  styleUrl: './text-plotly.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPlotlyComponent {
  constructor(private changeDetection: ChangeDetectorRef) {}

  titleLine: string = 'sss';
  graphicsLine = [
    undefined,
    {
      x: [0, 1, 2, 3],
      y: [1, 9, 4, 7],
      name: '1',
    },
    undefined,
    {
      x: [3, 4, 5, 6],
      y: [7, 5, 2, 4],
      name: '2',
    },
    { x: [0, 1, 2, 3, 4, 5, 6], y: [0, 8, 3, 6, 4, 1, 3], name: '3' },
  ];
  titleCandlestick: string = 'sss';
  graphicCandlestick = [
    {
      TRADEDATE: '2017-01-17',
      OPEN: 118.339996,
      CLOSE: 120,
      HIGH: 120.239998,
      LOW: 118.220001,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-18',
      OPEN: 120,
      CLOSE: 119.989998,
      HIGH: 120.5,
      LOW: 119.709999,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-19',
      OPEN: 119.400002,
      CLOSE: 119.779999,
      HIGH: 120.089996,
      LOW: 119.370003,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-20',
      OPEN: 120.449997,
      CLOSE: 120,
      HIGH: 120.449997,
      LOW: 119.730003,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-23',
      OPEN: 120,
      CLOSE: 120.080002,
      HIGH: 120.809998,
      LOW: 119.769997,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-24',
      OPEN: 119.550003,
      CLOSE: 119.970001,
      HIGH: 120.099998,
      LOW: 119.5,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-25',
      OPEN: 120.419998,
      CLOSE: 121.879997,
      HIGH: 122.099998,
      LOW: 120.279999,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-26',
      OPEN: 121.669998,
      CLOSE: 121.940002,
      HIGH: 122.440002,
      LOW: 121.599998,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-27',
      OPEN: 122.139999,
      CLOSE: 121.949997,
      HIGH: 122.349998,
      LOW: 121.599998,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-30',
      OPEN: 120.93,
      CLOSE: 121.629997,
      HIGH: 121.629997,
      LOW: 120.660004,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-01-31',
      OPEN: 121.150002,
      CLOSE: 121.349998,
      HIGH: 121.389999,
      LOW: 120.620003,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-01',
      OPEN: 127.029999,
      CLOSE: 128.75,
      HIGH: 130.490005,
      LOW: 127.010002,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-02',
      OPEN: 127.980003,
      CLOSE: 128.529999,
      HIGH: 129.389999,
      LOW: 127.779999,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-03',
      OPEN: 128.309998,
      CLOSE: 129.080002,
      HIGH: 129.190002,
      LOW: 128.160004,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-06',
      OPEN: 129.130005,
      CLOSE: 130.289993,
      HIGH: 130.5,
      LOW: 128.899994,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-07',
      OPEN: 130.539993,
      CLOSE: 131.529999,
      HIGH: 132.089996,
      LOW: 130.449997,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-08',
      OPEN: 131.350006,
      CLOSE: 132.039993,
      HIGH: 132.220001,
      LOW: 131.220001,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-09',
      OPEN: 131.649994,
      CLOSE: 132.419998,
      HIGH: 132.449997,
      LOW: 131.119995,
      VOLUME: 0,
    },
    {
      TRADEDATE: '2017-02-10',
      OPEN: 132.460007,
      CLOSE: 132.119995,
      HIGH: 132.940002,
      LOW: 132.050003,
      VOLUME: 0,
    },
  ];
  ngOnInit() {
    setTimeout(() => {
      this.titleLine = '1111';
      this.titleCandlestick = '111';

      console.log('ddd');
      this.changeDetection.detectChanges();
    }, 3000);
  }
}
