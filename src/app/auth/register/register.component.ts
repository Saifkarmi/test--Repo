import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup = new FormGroup(
    {
      fname:new FormControl('',Validators.required),
      lname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      passwordCheck:new FormControl('',[Validators.required,Validators.minLength(8)]),
      gender:new FormControl('')
    }
  )




  constructor(private routs:Router) { }

  ngOnInit(): void {
    
  }
  submit()
  {
    console.log(this.registerForm.value);
  }

  compare()
  {
    if (this.registerForm.controls['password'].value == this.registerForm.controls['passwordCheck'].value )
    this.registerForm.controls['passwordCheck'].setErrors(null);
    else
    this.registerForm.controls['passwordCheck'].setErrors({mismatch:true});
  }
  ToLogin()
  {
    this.routs.navigate(['security/login'])
  }

}
