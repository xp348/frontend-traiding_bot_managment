import { Routes } from '@angular/router';
import { TextNgRxComponent } from './features/text-ng-rx/text-ng-rx.component';
import { TextPlotlyComponent } from './features/text-plotly/text-plotly.component';
import { TextTailwindComponent } from './features/text-tailwind/text-tailwind.component';
import { TextAngularMaterialComponent } from './features/text-angular-material/text-angular-material.component';
import { AuthComponent } from './features/auth/auth.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayouComponent } from './shared/components/main-layou/main-layou.component';

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
