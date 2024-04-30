import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
declare const Plotly: any;
interface Graphic {
  x: number[];
  y: number[];
  name: string;
}
type GraphicsType = (Graphic | undefined)[];
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
  titleSetting = {
    x: 0.05, // Задаем отступ слева (относительно графика)
    // y: 0.95, // Задаем отступ сверху (относительно графика)
    // xanchor: 'left', // Задаем выравнивание текста по левому краю
    // yanchor: 'top', // Задаем выравнивание текста по верхнему краю
  } as const;

  lineSetting = {
    // color: '#00d9d9',
    // width: 2, // Толщина линии
    // shape: 'spline', // Форма линии (например, 'linear', 'spline', 'hv', 'vh', 'hvh', 'vhv')
    // smoothing: 1, // Сглаживание линии (0-1)
  } as const;

  fontSetting = {
    color: '#e0e3e2', // Цвет текста
    // family: 'Arial', // Семейство шрифтов
    size: 18, // Размер шрифта
  } as const;

  traceStyle = {
    mode: 'lines+markers',
    line: this.lineSetting,
    type: 'scatter',
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
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 50,
    //   t: 50,
    //   pad: 4,
    // },

    // shapes: [
    // {
    //   type: 'rect',
    //   xref: 'paper',
    //   yref: 'paper',
    //   x0: 0,
    //   y0: 0,
    //   x1: 1,
    //   y1: 1,
    //   line: {
    //     color: '#3f4948', // Цвет границы
    //     width: 1, // Толщина границы
    //   },
    //   fillcolor: 'rgba(255,255,255,0)', // Прозрачность заливки
    // },
    // ],
    // updatemenus: [
    //   {
    //     x: 0.95, // Позиция по оси X
    //     y: 0.95, // Позиция по оси Y
    //     xanchor: 'right', // Выравнивание по правому краю
    //     yanchor: 'top', // Выравнивание по верхнему краю
    //     buttons: [
    //       {
    //         label: 'Button 1',
    //         method: 'relayout',
    //         args: ['title.text', 'Title Updated'], // Аргументы для изменения заголовка
    //       },
    //       {
    //         label: 'Button 2',
    //         method: 'relayout',
    //         args: ['title.text', 'Title Reset'], // Аргументы для сброса заголовка
    //       },
    //     ],
    //   },
    // ],
  } as const;

  BarButtonsList = [] as const;

  config = {
    showlegend: false,
    // showLink: true,
    // plotlyServerURL: 'https://chart-studio.plotly.com',
    // modeBarButtonsToRemove: ['toImage'], // Удаление кнопки конвертации графика в изображение
    // modeBarButtonsToAdd: [
    //   {
    //     name: 'Custom Button',
    //     icon: Plotly.Icons.home, // Иконка для новой кнопки
    //     click: function () {
    //       // Обработчик события нажатия на новую кнопку
    //       alert('Custom button clicked');
    //     },
    //   },
    // ],
    displaylogo: false, // Удаление логотипа Plotly
    displayModeBar: false, // Показать панель инструментов
    displayPanel: true, // Показать панель управления
    modeBarButtons: this.BarButtonsList.map((i) => [i]), // Настройка расположения кнопок
  } as const;

  color = ['#b3f5f5', '#00d9d9', '#004f4f', '#ffb787', '#ffb4ab'] as const;
  //////////////////////////////////////////////////////////////

  @Input() key: string = '';
  @Input() title: string = '';
  @Input() graphics: GraphicsType = [];
  @Input() size: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes['graphics'] && changes['graphics'].currentValue) ||
      (changes['title'] && changes['title'].currentValue) ||
      (changes['size'] && changes['size'].currentValue) ||
      (changes['key'] && changes['key'].currentValue)
    )
      this.creatingGraph();
  }
  ngAfterViewInit(): void {
    this.creatingGraph();
  }

  creatingGraph() {
    let linechart = document.getElementById('lineChart_' + this.key);
    linechart &&
      Plotly.newPlot(
        linechart,
        ...this.settingGraphics(this.graphics, this.title)
      );
  }

  settingGraphics(graphics: GraphicsType, title: string) {
    let data = graphics.map((graphic, index) => ({
      ...graphic,
      line: {
        color: this.color[index],
      },
    }));

    let layout: any = this.layoutSetting;
    layout.title.text = title;

    return [data, layout, this.config];
  }
}
