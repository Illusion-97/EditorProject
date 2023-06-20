import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  formControlDescription : FormControl = new FormControl<string>(
    '',
    [Validators.required,Validators.minLength(30)]
  );

  isInvalid(field?: string) {
    return this.formControlDescription.dirty && (
      field
        ? this.formControlDescription.hasError(field)
        : this.formControlDescription.invalid
    )
  }
}
