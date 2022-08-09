import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:FormControl=new FormControl('',[Validators.email,Validators.required])
  password:FormControl=new FormControl('',[Validators.minLength(8),Validators.required])
  constructor(private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  Submit()
  {
    this.spinner.show();
    setTimeout(()=>{
      console.log(this.email.value);
    console.log(this.password.value);
    this.spinner.hide();
    },
    5000)
    
   
  }
}
