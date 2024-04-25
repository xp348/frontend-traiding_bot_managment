import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './core/core.module';
import { MapperPipe } from './shared/pipes/mapper.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  imports: [
    RouterOutlet,
    RouterModule.forRoot(routes),
    CoreModule,
    MapperPipe,
    HttpClientModule,
  ],
})
export class AppModule {}
