import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTailwindComponent } from './text-tailwind.component';

describe('TextTailwindComponent', () => {
  let component: TextTailwindComponent;
  let fixture: ComponentFixture<TextTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTailwindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
