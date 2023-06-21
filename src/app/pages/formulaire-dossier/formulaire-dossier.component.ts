import { Component } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {getControl, isInvalid} from "../../helpers/ReactiveFormsTools";

@Component({
  selector: 'app-formulaire-dossier',
  templateUrl: './formulaire-dossier.component.html',
  styleUrls: ['./formulaire-dossier.component.css']
})
export class FormulaireDossierComponent {

  userForm: FormGroup;
  dossierForm : FormGroup;
  filesArray : FormArray = new FormArray([new FormControl()])

  constructor(private builder: FormBuilder) {
    this.userForm = builder.group({
      id: new FormControl(0),
      username: new FormControl('', Validators.required),
      role: new FormControl('BASIC'),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

    this.dossierForm = builder.group({
      name: new FormControl('', Validators.required),
      tag: new FormControl([]),
      owner: this.userForm,
      content: this.filesArray
    })
  }

  castControl(control: AbstractControl) {
    return <FormControl>control;
  }

  protected readonly isInvalid = isInvalid;
  protected readonly getControl = getControl;

  addFileControl() {
    this.filesArray.push(new FormControl())
  }

  handleSubmit() {
    alert(JSON.stringify(this.dossierForm.value))
  }
}
