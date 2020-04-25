import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private baseUrl = 'http://localhost:9090/api/customers';

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomer(customerId: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${customerId}`);
  }

  deleteCustomer(customerId: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${customerId}`,
    { responseType: 'text' });
  }
}
  
