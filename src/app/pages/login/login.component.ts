import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {isInvalid} from "../../helpers/ReactiveFormsTools";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup<any>({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(private service: AuthService) {
  }

  isInvalid(controlName: string ,field?: string) {
    return isInvalid(this.form,controlName,field)
  }

  handleSubmit() {
    // Vérifiez toujours en premier lieu la validité de vos formulaires
    if(this.form.pristine || this.form.invalid) {
      alert('Formulaire invalide');
      return;
    }
    alert(JSON.stringify(this.form.value))
    const {email,password} = this.form.value
    this.service.login(email,password)
  }

}
