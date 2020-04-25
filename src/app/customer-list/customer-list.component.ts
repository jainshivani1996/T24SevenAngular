import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>;
  output:string;

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData()
  {
    this.customers = this.customerService.getCustomerList();
  }

  customerDetails(customerId: string)
  {
    this.router.navigate(['details',customerId]);
  }

  deleteCustomer(customerId: string){
    this.customerService.deleteCustomer(customerId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
    this.output = "deleted";
  }
}
