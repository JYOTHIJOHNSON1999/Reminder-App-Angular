import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  tag = "Simplify Your Life...!!!"
  IdOfUser = "USER ID PLEASE"

  userid = " "
  pswd = " "

  
  loginForm = this.fb.group({
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router: Router, private ds: DataService,private fb:FormBuilder) { }

  


  ngOnInit(): void {

  }



  login() {
    var userid = this.loginForm.value.userid
    var pswd = this.loginForm.value.pswd

    if(this.loginForm.valid){
      const result = this.ds.login(userid, pswd)
      if (result) {
        alert("Login successful")
        this.router.navigateByUrl('dashboard')
      }
    }
    else{
      alert("Invalid form")
    }
    
  }



}