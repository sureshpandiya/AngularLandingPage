import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null || {};
      }
  
      const valid = regex.test(control.value);
  
      return valid ? null || {} : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const createPswdControl = control.get('createPswd');
    const confirmPswdControl = control.get('confirmPswd');
    
    if (createPswdControl && confirmPswdControl){
      const createPswd: string = createPswdControl.value;
      const confirmPassword: string = confirmPswdControl.value;
      // console.log(createPswd !== confirmPassword);
      if (createPswd !== confirmPassword) {
        control.get('confirmPswd')?.setErrors({ NoPassswordMatch: true });
      }
    }
  }
}
