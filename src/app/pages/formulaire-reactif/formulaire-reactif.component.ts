import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrls: ['./formulaire-reactif.component.css']
})
export class FormulaireReactifComponent {
  form: FormGroup = new FormGroup<any>({
    imageSrc: new FormControl(''),
    imageAlt: new FormControl(''),
    titre: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(30)]),
    link: new FormControl('', Validators.required),
  })

  getControl(controlName: string) :FormControl | null{
    const control = this.form.get(controlName);
    return control ? <FormControl>control : null;
  }

  isInvalid(controlName: string ,field?: string) {
    const control = this.getControl(controlName);
    return control ? control.dirty && (
      field
        ? control.hasError(field)
        : control.invalid
    ) : false
  }

  handleSubmit() {
    // Vérifiez toujours en premier lieu la validité de vos formulaires
    if(this.form.pristine || this.form.invalid) {
      alert('Formulaire invalide');
      return;
    }

    alert(JSON.stringify(this.form.value))
  }
}
