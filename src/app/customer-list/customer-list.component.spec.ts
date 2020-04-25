
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { of } from 'rxjs';
import { Customer } from '../customer';
describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let service:CustomerService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[CustomerService]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return customer Deleted', () => {
   
    spyOn(service,'deleteCustomer').and.callFake(()=>{

      return of(true);
 
     });
     component.deleteCustomer("prati@12")
    expect(component.output).toContain("deleted");
  });


 
});

