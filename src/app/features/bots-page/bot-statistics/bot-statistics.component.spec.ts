import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotStatisticsComponent } from './bot-statistics.component';

describe('BotStatisticsComponent', () => {
  let component: BotStatisticsComponent;
  let fixture: ComponentFixture<BotStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
