/*import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

*/

import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { User } from './user';
describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let user:User;
  let u:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user', () => {
    spyOn(service,'userlogin').and.returnValue(u);
    expect(service.userlogin(user)).toEqual(u);
  });
});