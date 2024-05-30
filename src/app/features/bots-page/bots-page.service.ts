import { Injectable } from '@angular/core';
import { NeuralNetworkService, Period, Settings } from '../../core/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BotsPageService {
  constructor(private neuralNetworkService: NeuralNetworkService) {}

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
    treningDate: new FormControl<Period | null>(null, [Validators.required]),
    testingAsset: new FormControl<number | null>(1, [Validators.required]),
    testingDate: new FormControl<Period | null>(null, [Validators.required]),
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

    return this.neuralNetworkService.patchBotNeuralNetworkBot2Post(
      settings as any
    );
  }
}
