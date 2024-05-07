import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastsPageComponent } from './forecasts-page.component';

describe('ForecastsPageComponent', () => {
  let component: ForecastsPageComponent;
  let fixture: ComponentFixture<ForecastsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
