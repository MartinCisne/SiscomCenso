import { TestBed } from '@angular/core/testing';

import { SendPicturesService } from './send-pictures.service';

describe('SendPicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendPicturesService = TestBed.get(SendPicturesService);
    expect(service).toBeTruthy();
  });
});
