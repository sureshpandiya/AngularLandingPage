import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/custom-validators';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordFieldType: string = 'password';

  isSubmitted = true;
  signupForm: any = FormGroup;
  show: any = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  createSigninForm(){
    this.signupForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      createPswd: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CustomValidators.patternValidator(/[ @$!%*?&#]/, { hasSpecialCharacters: true }),
        ])
      ],
      confirmPswd: [null, Validators.compose([Validators.required])]
    },
    {
      validator: CustomValidators.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    this.createSigninForm();
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  getToggle() {
    this.show = true;
    if (this.show === true) {
      this.router.navigateByUrl('/')
    }
  }

  onSubmit() {
    // if (this.signupForm.valid) {
    //   const formData = this.signupForm.value;
    //   console.log(formData);
    //   alert('signup Successful');
    //   this.router.navigateByUrl('/');
    // }
  }

  
}
