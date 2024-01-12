import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSignUpActive: boolean = false;
  userData!: FormGroup
  constructor(){
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    })
  }

  onSubmit(){
    if(this.userData.valid){
      console.log(this.userData.value)
    }else{
      console.log('not valid')
    }
  }


  signUp() {


  }

  toggleForm() {
    this.isSignUpActive = !this.isSignUpActive;
  }

  

  signIn() {
    // Handle sign-in logic
  }
  


}
