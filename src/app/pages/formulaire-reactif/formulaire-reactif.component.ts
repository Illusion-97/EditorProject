import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {filter} from "../../helpers/validateurs/filter";
import {isInvalid} from "../../helpers/ReactiveFormsTools";

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrls: ['./formulaire-reactif.component.css']
})
export class FormulaireReactifComponent {
  form: FormGroup = new FormGroup<any>({
    imageSrc: new FormControl(''),
    imageAlt: new FormControl(''),
    titre: new FormControl('', [Validators.required, filter('TryMeh')]),
    description: new FormControl('', [Validators.required, Validators.minLength(30)]),
    link: new FormControl('', Validators.required),
  })

  constructor(private service: ArticleService) {
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
    this.service.addArticle(this.form.value)
  }
}
