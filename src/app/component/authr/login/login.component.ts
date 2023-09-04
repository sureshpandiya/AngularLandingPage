import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  passwordFieldType: string = 'password';
  // ageValues: number[] = [];

  email: string = '';
  password: string = '';

  loginForm:any = FormGroup;
  formData: {
    email: string,
    password: string
  } = { email: '', password: '' };
  
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router ) {
  }
  
  loginFields(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', 
        Validators.compose([
          Validators.required, 
          // Validators.minLength(5),
          // CustomValidators.patternValidator(/\d/, { hasNumber: true }), 
          // CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }), 
          // CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }), 
          // CustomValidators.patternValidator(/[ @$!%*?&#]/,{ hasSpecialCharacters: true }),
        ])
      ],
      // gender: ['', Validators.required],
      // age: [24, Validators.required]
    });
    // for (let i = 1; i <= 100; i++) {
    //   this.ageValues.push(i);
    // }
  }

  ngOnInit(): void {
    this.loginFields()
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login() {
    console.log(this.loginForm.value.email);
    this.router.navigateByUrl('/dashboard');
  }
}
