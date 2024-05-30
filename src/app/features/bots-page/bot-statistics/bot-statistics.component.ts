import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { LineChartComponent } from '../../../shared/components/line-chart/line-chart.component';
import { CandlestickChartComponent } from '../../../shared/components/candlestick-chart/candlestick-chart.component';

@Component({
  selector: 'app-bot-statistics',
  standalone: true,
  imports: [LineChartComponent, CandlestickChartComponent],
  templateUrl: './bot-statistics.component.html',
  styleUrl: './bot-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotStatisticsComponent {
  @Input() statistics: any;
  constructor(private changeDetection: ChangeDetectorRef) {}

  // graphicsLine1 = [
  //   undefined,
  //   {
  //     x: [],
  //     y: [],
  //     name: 'Средняя абсолютная ошибка на обучающем наборе', //loss
  //   },
  //   undefined,
  //   {
  //     x: [3, 4, 5, 6],
  //     y: [7, 5, 2, 4],
  //     name: 'Средняя абсолютная ошибка на проверочном наборе', //val_loss
  //   },
  // ];
  graphicsLine: any[] = [];
  graphicsLine2: any[] = [];

  graphicCandlestickTest: any[] | undefined;
  graphicCandlestickTrain: any[] | undefined;
  // graphicCandlestick2: any[] = [];
  // graphicCandlestick = [
  //   {
  //     TRADEDATE: '2017-01-17',
  //     OPEN: 118.339996,
  //     CLOSE: 120,
  //     HIGH: 120.239998,
  //     LOW: 118.220001,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-18',
  //     OPEN: 120,
  //     CLOSE: 119.989998,
  //     HIGH: 120.5,
  //     LOW: 119.709999,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-19',
  //     OPEN: 119.400002,
  //     CLOSE: 119.779999,
  //     HIGH: 120.089996,
  //     LOW: 119.370003,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-20',
  //     OPEN: 120.449997,
  //     CLOSE: 120,
  //     HIGH: 120.449997,
  //     LOW: 119.730003,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-23',
  //     OPEN: 120,
  //     CLOSE: 120.080002,
  //     HIGH: 120.809998,
  //     LOW: 119.769997,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-24',
  //     OPEN: 119.550003,
  //     CLOSE: 119.970001,
  //     HIGH: 120.099998,
  //     LOW: 119.5,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-25',
  //     OPEN: 120.419998,
  //     CLOSE: 121.879997,
  //     HIGH: 122.099998,
  //     LOW: 120.279999,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-26',
  //     OPEN: 121.669998,
  //     CLOSE: 121.940002,
  //     HIGH: 122.440002,
  //     LOW: 121.599998,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-27',
  //     OPEN: 122.139999,
  //     CLOSE: 121.949997,
  //     HIGH: 122.349998,
  //     LOW: 121.599998,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-30',
  //     OPEN: 120.93,
  //     CLOSE: 121.629997,
  //     HIGH: 121.629997,
  //     LOW: 120.660004,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-01-31',
  //     OPEN: 121.150002,
  //     CLOSE: 121.349998,
  //     HIGH: 121.389999,
  //     LOW: 120.620003,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-01',
  //     OPEN: 127.029999,
  //     CLOSE: 128.75,
  //     HIGH: 130.490005,
  //     LOW: 127.010002,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-02',
  //     OPEN: 127.980003,
  //     CLOSE: 128.529999,
  //     HIGH: 129.389999,
  //     LOW: 127.779999,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-03',
  //     OPEN: 128.309998,
  //     CLOSE: 129.080002,
  //     HIGH: 129.190002,
  //     LOW: 128.160004,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-06',
  //     OPEN: 129.130005,
  //     CLOSE: 130.289993,
  //     HIGH: 130.5,
  //     LOW: 128.899994,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-07',
  //     OPEN: 130.539993,
  //     CLOSE: 131.529999,
  //     HIGH: 132.089996,
  //     LOW: 130.449997,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-08',
  //     OPEN: 131.350006,
  //     CLOSE: 132.039993,
  //     HIGH: 132.220001,
  //     LOW: 131.220001,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-09',
  //     OPEN: 131.649994,
  //     CLOSE: 132.419998,
  //     HIGH: 132.449997,
  //     LOW: 131.119995,
  //     VOLUME: 0,
  //   },
  //   {
  //     TRADEDATE: '2017-02-10',
  //     OPEN: 132.460007,
  //     CLOSE: 132.119995,
  //     HIGH: 132.940002,
  //     LOW: 132.050003,
  //     VOLUME: 0,
  //   },
  // ];
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.qqqqq = '1';
  //     console.log('qqq');
  //     this.changeDetection.detectChanges();
  //   }, 3000);
  // }
  ngOnChanges(changes: SimpleChanges) {
    if (!(changes['statistics'] && changes['statistics'].currentValue)) return;

    this.graphicsLine = [
      undefined,
      {
        x: this.statistics.loss.map((_: any, index: any) => index),
        y: this.statistics.loss,
        name: 'Обучение',
      },
      undefined,
      {
        x: this.statistics.val_loss.map((_: any, index: any) => index),
        y: this.statistics.val_loss,
        name: 'Проверка',
      },
    ];

    this.graphicsLine2 = [
      undefined,
      {
        x: this.statistics.predVal.map((_: any, index: any) => index),
        y: this.statistics.predVal.map((i: any) => i[0]),
        name: 'Прогноз',
      },
      undefined,
      {
        x: this.statistics.yValUnscaled.map((_: any, index: any) => index),
        y: this.statistics.yValUnscaled.map((i: any) => i[0]),
        name: 'Базовый ряд',
      },
    ];
    this.graphicCandlestickTest = (this.statistics.dataTest as any[][]).map(
      (i) => {
        return {
          TRADEDATE: i[0],
          OPEN: i[1],
          CLOSE: i[2],
          HIGH: i[3],
          LOW: i[4],
          VOLUME: i[5],
        };
      }
    );
    this.graphicCandlestickTrain = (this.statistics.dataTrain as any[][]).map(
      (i) => {
        return {
          TRADEDATE: i[0],
          OPEN: i[1],
          CLOSE: i[2],
          HIGH: i[3],
          LOW: i[4],
          VOLUME: i[5],
        };
      }
    );
    console.log(changes);
    this.changeDetection.detectChanges();
  }
}
