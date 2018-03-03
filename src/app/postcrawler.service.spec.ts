import { TestBed, inject } from '@angular/core/testing';

import { PostcrawlerService } from './postcrawler.service';

describe('PostcrawlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostcrawlerService]
    });
  });

  it('should be created', inject([PostcrawlerService], (service: PostcrawlerService) => {
    expect(service).toBeTruthy();
  }));
});
