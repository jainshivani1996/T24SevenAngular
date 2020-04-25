import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T24Seven Online Banking System';
  imagePath='/assets/images/2.png';
  constructor(public loginService:AuthenticationService){}
}
