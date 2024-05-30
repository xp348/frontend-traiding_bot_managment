import { TestBed } from '@angular/core/testing';

import { BotsPageService } from './bots-page.service';

describe('BotsPageService', () => {
  let service: BotsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
