import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ContentBlockComponent } from '../../../shared/components/content-block/content-block.component';
import { InputPeriodComponent } from '../../../shared/components/input-period/input-period.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { NeuralNetworkService } from '../../../core/api';

interface Period {
  start: Date | null;
  end: Date | null;
}
@Component({
  selector: 'app-bot-settings',
  standalone: true,
  imports: [
    ContentBlockComponent,
    InputPeriodComponent,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
  ],
  templateUrl: './bot-settings.component.html',
  styleUrl: './bot-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotSettingsComponent {
  ngOnInit() {}
  // "model": {
  // 	"loss": "mse",
  // 	"optimizer": "adam",
  // 	"save_dir": "saved_models",
  // 	"layers": [
  // 		{
  // 			"type": "lstm",
  // 			"neurons": 100,
  // 			"input_timesteps": 49,
  // 			"input_dim": 2,
  // 			"return_seq": true
  // 		},
  // 		{
  // 			"type": "dropout",
  // 			"rate": 0.2
  // 		},
  // 		{
  // 			"type": "lstm",
  // 			"neurons": 100,
  // 			"return_seq": true
  // 		},
  // 		{
  // 			"type": "lstm",
  // 			"neurons": 100,
  // 			"return_seq": false
  // 		},
  // 		{
  // 			"type": "dropout",
  // 			"rate": 0.2
  // 		},
  // 		{
  // 			"type": "dense",
  // 			"neurons": 1,
  // 			"activation": "linear"
  // 		}
  // 	]
  // }

  constructor(private neuralNetworkService: NeuralNetworkService) {}
  @Output() statistics = new EventEmitter<any>();
  assets = [{ name: 'SBER', id: 1 }];
  losses = ['mse'];
  optimizers = ['adam'];
  types = ['lstm', 'dropout', 'dense'];
  activations = ['linear'];
  layers = [
    {
      type: new FormControl<string | null>('lstm', [Validators.required]),
      neurons: new FormControl<number | null>(100, [Validators.required]),
      input_timesteps: 49,
      input_dim: 2,
      return_seq: true,
    },
    {
      type: new FormControl<string | null>('dropout', [Validators.required]),
      rate: new FormControl<number | null>(0.2, [Validators.required]),
    },
    {
      type: new FormControl<string | null>('lstm', [Validators.required]),
      neurons: new FormControl<number | null>(100, [Validators.required]),
      input_timesteps: undefined,
      input_dim: undefined,
      return_seq: true,
    },
    {
      type: new FormControl<string | null>('lstm', [Validators.required]),
      neurons: new FormControl<number | null>(100, [Validators.required]),
      input_timesteps: undefined,
      input_dim: undefined,
      return_seq: false,
    },
    {
      type: new FormControl<string | null>('dropout', [Validators.required]),
      rate: new FormControl<number | null>(0.2, [Validators.required]),
    },
    {
      type: new FormControl<string | null>('dense', [Validators.required]),
      neurons: new FormControl<number | null>(1, [Validators.required]),
      activation: new FormControl<string | null>('linear', [
        Validators.required,
      ]),
    },
  ];
  form = new FormGroup({
    treningAsset: new FormControl<number | null>(1, [Validators.required]),
    treningDate: new FormControl<Period | null>(
      {
        start: new Date('2001-12-31T17:00:00.000Z'),
        end: new Date('2019-12-31T17:00:00.000Z'),
      },
      [Validators.required]
    ),
    testingAsset: new FormControl<number | null>(1, [Validators.required]),
    testingDate: new FormControl<Period | null>(
      {
        start: new Date('2021-12-31T17:00:00.000Z'),
        end: new Date('2022-11-23T17:00:00.000Z'),
      },
      [Validators.required]
    ),
    sequenceLength: new FormControl<number | null>(50, [Validators.required]),
    normalise: new FormControl<boolean>(false, [Validators.required]),
    numberEpochs: new FormControl<number | null>(2, [Validators.required]),
    batchSize: new FormControl<number | null>(32, [Validators.required]),
    loss: new FormControl<string | null>('mse', [Validators.required]),
    optimizer: new FormControl<string | null>('adam', [Validators.required]),
  });

  Bot2Post() {
    const settings: any = {
      params: this.form.value,
      layers: this.layers.map((i) => {
        return {
          ...i,
          type: i.type.value,
          neurons: i?.neurons?.value,
          activation: i?.activation?.value,
          rate: i?.rate?.value,
        };
      }),
    };
    // this.statistics.emit('res');
    this.neuralNetworkService
      .patchBotNeuralNetworkBot2Post(settings as any)
      .subscribe((res) => {
        this.statistics.emit(res);
      });
  }
}
