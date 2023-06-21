import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function MustMatch(controlToMatch: AbstractControl) : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return  control.value === controlToMatch.value
      ? null
      : {MustMatch: {value: controlToMatch.value}}
  }
}
