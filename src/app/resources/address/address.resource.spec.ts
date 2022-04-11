import { TestBed } from '@angular/core/testing';

import { AddressResource } from './address.resource';

describe('AddressService', () => {
  let service: AddressResource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
