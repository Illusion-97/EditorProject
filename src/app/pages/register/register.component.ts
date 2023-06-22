import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {getControl, isInvalid} from "../../helpers/ReactiveFormsTools";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl('', Validators.required),
    role: new FormControl('BASIC'),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    passwordChk: new FormControl('', Validators.required),
  }, this.matchingPasswords)

  constructor(private service: AuthService,private router : Router, private route: ActivatedRoute) {
    this.form.patchValue({
      id: Number(route.snapshot.paramMap.get("id")) || 0
    })
    // this.form.setValue({}) Attention set value doit être utilisé avec un objet ayant EXACTEMENT la même structure
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
    this.service.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/login']).then()
      }
    })
  }

  matchingPasswords(control: AbstractControl) : ValidationErrors | null {
    const form : FormGroup = <FormGroup>control;
    const pswrd = getControl(form,'password')
    const pswrdChk = getControl(form,'passwordChk')
    return pswrd?.value === pswrdChk?.value
    ? null
      : {password: {value: 'password not matching'}}
  }
}
