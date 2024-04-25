import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayouComponent } from './main-layou.component';

describe('MainLayouComponent', () => {
  let component: MainLayouComponent;
  let fixture: ComponentFixture<MainLayouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
