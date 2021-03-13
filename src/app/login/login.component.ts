import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service'
import { LoginDetail } from '../Model/login'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userData:any= [];
 userDetails: Observable<LoginDetail[]>
  constructor(private login: LoginServiceService) { }

  getUser() {
    this.login.getUser().subscribe((res)=>{
      this.userData = res;
    })
  }
   details = {
     name:"",
     password:"",
  }
  
  postDetails(): void {
   this.login.postDetail(this.details).subscribe(res=>{
  })

  }
  ngOnInit() {
    
    
  }

}
