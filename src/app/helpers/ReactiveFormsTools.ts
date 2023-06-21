import {FormControl, FormGroup} from "@angular/forms";

export function getControl(form: FormGroup, controlName: string) :FormControl | null{
  const control = form.get(controlName);
  return control ? <FormControl>control : null;
}

export function isInvalid(form: FormGroup, controlName: string ,field?: string) {
  const control = getControl(form, controlName);
  return control ? control.dirty && (
    field
      ? control.hasError(field)
      : control.invalid
  ) : false
}
