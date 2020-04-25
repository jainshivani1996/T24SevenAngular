import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AuthenticationService;
  let user:User=new User();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[AuthenticationService]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  xit('should return null', () => {

    let ans=null;
    component.onSubmit();
    spyOn(service,'userlogin').and.callFake(()=>{

      return of(ans);
 
     });

     expect(component.errorMessage).toContain("Incorrect Details");


  
  });
  it('should return user', () => {

    component.onSubmit();
    spyOn(service,'userlogin').and.callFake(()=>{
     user.customerId="admin"
     //user.id=1
     user.password="123"
     user.role="A"
     //user.userId=3;
      return of(user);
 
     });

     expect(component.errorMessage).toContain("Incorrect Details");


  
  });
});
