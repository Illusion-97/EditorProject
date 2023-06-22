import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../services/article.service";
import {filter} from "../../helpers/validateurs/filter";
import {isInvalid} from "../../helpers/ReactiveFormsTools";
import {Observable, Subscription} from "rxjs";
import {Article} from "../../models/article";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrls: ['./formulaire-reactif.component.css']
})
export class FormulaireReactifComponent {
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    imageSrc: new FormControl(''),
    imageAlt: new FormControl(''),
    titre: new FormControl('', [Validators.required, filter('TryMeh')]),
    description: new FormControl('', [Validators.required, Validators.minLength(30)]),
    link: new FormControl('', Validators.required),
  })

  constructor(private service: ArticleService, private router: Router, private route: ActivatedRoute) {
    const id = Number(route.snapshot.paramMap.get("id")) || 0
    if(id > 0)this.subscribeArticle(service.byId(id))
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
    //this.service.addArticle(this.form.value)

    /*if(this.form.value.id === 0) {
      this.service.createArticle(this.form.value).subscribe({
        next: response => {
          this.form.patchValue(response)
        }
      })
    } else {
      this.service.update(this.form.value).subscribe({
        next: response => {
          this.form.patchValue(response)
        }
      })
    }*/

    /*let obs : Observable<Article>;
    if(this.form.value.id === 0) {
      obs = this.service.createArticle(this.form.value)
    } else {
      obs = this.service.update(this.form.value)
    }

    const subscrption: Subscription = obs.subscribe({
      next: response => {
        this.form.patchValue(response)
      }
    })*/

     this.subscribeArticle(this.form.value.id === 0
        ? this.service.createArticle(this.form.value)
        : this.service.update(this.form.value))
  }

  subscribeArticle(obs: Observable<Article>) {
    const ternarySub : Subscription = obs.subscribe({
      next: response => {
        this.form.patchValue(response)
        // Il faut parfois se méfier des souscriptions qui sont la porte ouverte aux fuites mémoire
        // en général pour des requêtes HTTP, il convient de se désabonner apres récupération de la réponse comme suit :
        // ternarySub.unsubscribe()
      },
      error: () => {
        this.router.navigate(['/home']).then(
          () => alert('Une erreur est survenue !')
        )
      }
    })
  }

  delete() {
    this.service.delete(this.form.value.id).subscribe({
      next: () => this.router.navigate(['/home']).then(
        () => alert('Suppression effectuée')
      )
    })
  }
}
