import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAngularMaterialComponent } from './text-angular-material.component';

describe('TextAngularMaterialComponent', () => {
  let component: TextAngularMaterialComponent;
  let fixture: ComponentFixture<TextAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAngularMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
