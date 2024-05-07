import { Routes } from '@angular/router';
import { TextNgRxComponent } from './features/text-ng-rx/text-ng-rx.component';
import { TextPlotlyComponent } from './features/text-plotly/text-plotly.component';
import { TextTailwindComponent } from './features/text-tailwind/text-tailwind.component';
import { TextAngularMaterialComponent } from './features/text-angular-material/text-angular-material.component';
import { AuthComponent } from './features/auth/auth.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayouComponent } from './shared/layouts/main-layout/main-layout.component';
import { BotsPageComponent } from './features/bots-page/bots-page.component';
import { AssetsPageComponent } from './features/assets-page/assets-page.component';
import { ForecastsPageComponent } from './features/forecasts-page/forecasts-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [NoAuthGuard],
    children: [
      { path: 'signin', component: AuthComponent },
      { path: 'register', component: AuthComponent },
      // { path: 'recovery', component: AuthComponent },
      { path: '', pathMatch: 'full', redirectTo: 'signin' },
    ],
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: MainLayouComponent,
    children: [
      {
        path: 'bots-page',
        component: BotsPageComponent,
      },
      {
        path: 'forecasts-page',
        component: ForecastsPageComponent,
      },
      {
        path: 'assets-page',
        component: AssetsPageComponent,
      },
      {
        path: 'TextNgRxComponent',
        component: TextNgRxComponent,
      },
      {
        path: 'TextPlotlyComponent',
        component: TextPlotlyComponent,
      },
      {
        path: 'TextTailwindComponent',
        component: TextTailwindComponent,
      },
      {
        path: 'TextAngularMaterialComponent',
        component: TextAngularMaterialComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'TextNgRxComponent' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  // { path: '**', redirectTo: 'page-errors' },
];
