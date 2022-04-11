import { TestBed } from '@angular/core/testing';

import { GeneralResource } from './general.resource';

describe('GeneralResource', () => {
  let service: GeneralResource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
