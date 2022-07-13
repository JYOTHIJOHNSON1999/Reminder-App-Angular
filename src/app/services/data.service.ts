import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  //database

  db: any = {
    1000: { "userid": 1000, "username": "Jyothi", "password": 1000,"date":10/7/2022 },
    1001: { "userid": 1001, "username": "Ammu", "password": 1001,"date":11/7/2022 },
    1002: { "userid": 1002, "username": "Manu", "password": 1002,"date":12/7/2022 },

  }

  constructor() { }

  //login

  login(userid: any, pswd: any) {
    let db = this.db
    if (userid in db) {
      if (pswd == db[userid]["password"]) {
       this.currentUser = db[userid]["username"]
        return true

      }
      else {
        alert("Incorrect password")
        return false
      }
    }
    else {
      alert("User doesn't exist")
      return false
    }
  }



  //register

  register(username: any, userid: any, password: any) {
    let db = this.db

    if (userid in db) {
      return false
    }
    else {
      //insert db
      db[userid] = {
        userid,
        username,
        password
      }
      return true
    }

  }


  //reminder add

  add(date:any,description:any){
    let db = this.db
  }


  
  
  view(){

  }


  saveDetails(){
    if(this.db){
      
    }
  }



}
