import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { error } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  user1:User=new User();
  private result: any;
  customerId = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  loginSuccess = false;

  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit(): void {
    this.user=new User();
    
  }

  /*checkLogin(){
    if(this.loginService.authenticate(this.customerId,this.password)){
      this.router.navigate([''])
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login successfull';
    }
    else{
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
  }*/
  onSubmit(){
    this.loginService.userlogin(this.user)
    .subscribe(data => {
      console.log(data);
      this.result=data
    },
    error => console.log());

  if(this.result==null)
  {
    console.log('Incorrect details');
    this.invalidLogin = true;
    this.loginSuccess = false;
  }
  else if(this.result.role == 'A')
  {
    this.user = new User();
    this.user.customerId = this.result.customerId;
    this.user.password=this.result.password;
    this.user.role=this.result.role;
    // console.log("Admin");
    sessionStorage.setItem("admin",JSON.stringify(this.user));
    this.router.navigate(['']);
    this.invalidLogin = true;
      this.loginSuccess = true;
      this.successMessage = 'Login successfull';
  }
  
}


}
