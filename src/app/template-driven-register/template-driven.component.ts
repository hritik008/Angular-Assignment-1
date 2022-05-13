import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  title = 'forms';
  @ViewChild('f')
  Forms!: NgForm;

  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  register():void{
    alert("User Registered Successfully")
  }
  userModel = new User('','',0,'','','');
}
