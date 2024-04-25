import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPlotlyComponent } from './text-plotly.component';

describe('TextPlotlyComponent', () => {
  let component: TextPlotlyComponent;
  let fixture: ComponentFixture<TextPlotlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPlotlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextPlotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
