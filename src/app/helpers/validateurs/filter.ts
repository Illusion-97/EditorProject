import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function filter(exclude: string = "example"): ValidatorFn { // Cette methode renvoie un Validateur
  return (control : AbstractControl) : ValidationErrors | null => { // Ceci est la signature que doit respecter une fonction de validation
    const value : string = control.value;
    return value.includes(exclude) // Condition à vérifier
      ? {Filter: {value: value}}  // Object {NomDeLErreur : {value: valeurTestée}}
      : null;
  }
}
