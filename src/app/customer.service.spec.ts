import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CustomerService } from './customer.service';
import { Customer } from './customer';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return customer List', () => {
    let customers:any;
    spyOn(service,'getCustomerList').and.returnValue(customers);
    expect(service.getCustomerList()).toEqual(customers);
  });

  it('should return customer', () => {
    let customers:any;
    spyOn(service,'getCustomer').and.returnValue(customers);
    expect(service.getCustomer("prati@12")).toEqual(customers);
  });
});
