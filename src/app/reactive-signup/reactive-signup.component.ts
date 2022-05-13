import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent implements OnInit {

  userForm: FormGroup;
  listData: any;

  constructor(private fb:FormBuilder) {

    this.listData = [];

    this.userForm = this.fb.group({
      name: ['',Validators.required],
      fname: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      password: ['',Validators.required]
    })
   }

   userForm1 = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      fname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
   })

   get name(){
     return this.userForm1.get('name');
   }
   get fname(){
    return this.userForm1.get('fname');
  }
  get email(){
    return this.userForm1.get('email');
  }
  get phone(){
    return this.userForm1.get('phone');
  }
  get password(){
    return this.userForm1.get('password');
  }

  public addItem():void{
    this.listData.push(this.userForm.value);
  }

  ngOnInit(): void {
  }

}
