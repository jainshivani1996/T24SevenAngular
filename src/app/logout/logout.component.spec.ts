/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../authentication.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authentication : AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports:[RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));


});

