import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
declare const Plotly: any;
interface Graphic {
  TRADEDATE: string;
  OPEN: number;
  CLOSE: number;
  HIGH: number;
  LOW: number;
  VOLUME: number;
}

@Component({
  selector: 'app-candlestick-chart',
  standalone: true,
  imports: [],
  templateUrl: './candlestick-chart.component.html',
  styleUrl: './candlestick-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandlestickChartComponent {
  titleSetting = {
    x: 0.05, // Задаем отступ слева (относительно графика)
    // y: 0.95, // Задаем отступ сверху (относительно графика)
    // xanchor: 'left', // Задаем выравнивание текста по левому краю
    // yanchor: 'top', // Задаем выравнивание текста по верхнему краю
  } as const;

  fontSetting = {
    color: '#e0e3e2', // Цвет текста
    // family: 'Arial', // Семейство шрифтов
    size: 12, // Размер шрифта
  } as const;

  layoutSetting = {
    title: {
      ...this.titleSetting,
    },
    font: this.fontSetting,
    plot_bgcolor: '#3f494800', // Цвет заднего фона
    paper_bgcolor: '#3f494800', // Цвет заднего фона графика
    xaxis: {
      gridcolor: '#3f4948', // Цвет задней сетки по оси X
    },
    yaxis: {
      gridcolor: '#3f4948', // Цвет задней сетки по оси Y
    },
  } as const;

  config = {
    displaylogo: false,
    displayModeBar: false,
    displayPanel: true,
    modeBarButtons: [
      ['toImage'],
      ['zoomIn2d'],
      ['zoomOut2d'],
      ['resetScale2d'],
    ],
  } as const;

  //////////////////////////////////////////////////////////////

  @Input() key: string = '';
  @Input() title: string = '';
  @Input() graphic: Graphic[] = [];
  @Input() size: number = 1000;
  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes['graphic'] && changes['graphic'].currentValue) ||
      (changes['title'] && changes['title'].currentValue) ||
      (changes['size'] && changes['size'].currentValue) ||
      (changes['key'] && changes['key'].currentValue)
    ) {
      this.creatingGraph();
      console.log('candlestick-chart ngOnChanges');
    }
  }
  ngAfterViewInit(): void {
    this.creatingGraph();
    console.log('candlestick-chart ngAfterViewInit');
  }

  creatingGraph() {
    let TESTER = document.getElementById('candlestickChart_' + this.key);
    TESTER &&
      Plotly.newPlot(TESTER, ...this.settingGraphics(this.graphic, this.title));
  }

  settingGraphics(graphics: Graphic[], title: string) {
    let date: string[] = [];
    let open: number[] = [];
    let close: number[] = [];
    let high: number[] = [];
    let low: number[] = [];
    graphics.forEach((i) => {
      date.push(i.TRADEDATE);
      open.push(i.OPEN);
      close.push(i.CLOSE);
      high.push(i.HIGH);
      low.push(i.LOW);
    });
    // // // graphics = date.map((_, index) => ({
    // // //   TRADEDATE: date[index],
    // // //   OPEN: open[index],
    // // //   CLOSE: close[index],
    // // //   HIGH: high[index],
    // // //   LOW: low[index],
    // // //   VOLUME: 0,
    // // // }));
    // // // console.log(JSON.stringify(graphics));
    var trace = {
      increasing: { line: { color: '#00d9d9' } },
      decreasing: { line: { color: '#ffb4ab' } },

      x: date,
      close: close,
      open: open,
      high: high,
      low: low,

      type: 'candlestick',
    };

    var data = [trace];

    let layout: any = this.layoutSetting;
    layout.title.text = title;

    return [data, layout, this.config];
  }
}
