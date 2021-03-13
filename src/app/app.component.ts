import { Component,OnInit } from '@angular/core';
import { LoginServiceService } from '../app/login/login-service.service'
import { LoginDetail } from './Model/login'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';
  userData:any = [];

  constructor(private login: LoginServiceService) { }

  

  ngOnInit() {
  }

}
