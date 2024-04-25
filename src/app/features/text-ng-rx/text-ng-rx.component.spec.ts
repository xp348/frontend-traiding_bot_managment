import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNgRxComponent } from './text-ng-rx.component';

describe('TextNgRxComponent', () => {
  let component: TextNgRxComponent;
  let fixture: ComponentFixture<TextNgRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextNgRxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextNgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
