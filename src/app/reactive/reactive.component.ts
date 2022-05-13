import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

loginForm = new FormGroup({
  user: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("^[A-Za-z][A-Za-z0-9_]{2,29}$")]),
  password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)])
})
loginUser(){
  alert("User Logged in");
}

get user(){
  return this.loginForm.get('user');
}
get password(){
  return this.loginForm.get('password');
}
  constructor() { }

  ngOnInit(): void {
  }

}
