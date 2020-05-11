import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { CustomerService } from '../customer.service';
import { CustomerDetailsComponent } from './customer-details.component';
import { Customer } from '../customer';
import { of } from 'rxjs';
describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;
  let service: CustomerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule,HttpClientTestingModule ],
      declarations: [ CustomerDetailsComponent ],
      providers:[CustomerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CustomerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

   it('should return Customer details', () => {
    let customer:Customer=new Customer();
   spyOn(service,'getCustomer').and.callFake(()=>{
    return of(customer);
 
     });
     expect(component.customer).toBeTruthy();
    });

});
