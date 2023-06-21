import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {AuthService} from "../../services/auth.service";

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
    const {email,password} = this.form.value
    this.service.login(email,password)
  }

}
