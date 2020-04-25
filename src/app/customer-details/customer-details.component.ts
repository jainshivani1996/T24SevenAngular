import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
import { Router,ActivatedRoute } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId: string;
  customer: Customer;

  constructor(private route: ActivatedRoute,private router: Router, 
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = new Customer();

    this.customerId = this.route.snapshot.params['customerId'];

    this.customerService.getCustomer(this.customerId)
    .subscribe(data => {
      console.log(data)
      this.customer = data;
    }, error => console.log(error));
    
  }
  list(){
    this.router.navigate(['customers']);
  }

}
