import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  date = " "
  description = " "




user:any

  constructor(private router: Router, private ds: DataService,private fb:FormBuilder) { 
    this.user = this.ds.currentUser
  }


  addForm = this.fb.group({
    date:[''],
    description:['']
  })



  ngOnInit(): void {
  }


  add() {
    
    var date = this.addForm.value.date
    var description = this.addForm.value.description
    const result = this.ds.add(date,description)
    // console.log(date);
    // console.log(description);
    if(this.addForm.valid){
      const result = this.ds.add(date,description)
      // if (result) {
      //   alert("Reminder added successfully")
      //   this.router.navigateByUrl('viewevent')
      // }
    }
    else{
      alert("Invalid form")
    }
    
  }









  logout() {
    // this.router.navigateByUrl("")
    alert("login clicked")
  }

}
