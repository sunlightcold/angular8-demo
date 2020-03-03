/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UseValueService } from './useValue.service';

describe('Service: UseValue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseValueService]
    });
  });

  it('should ...', inject([UseValueService], (service: UseValueService) => {
    expect(service).toBeTruthy();
  }));
});
