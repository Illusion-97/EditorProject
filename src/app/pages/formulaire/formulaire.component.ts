import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  imageSrc: string = "";
  imageAlt: string = "";
  titre: string = "";
  description: string = "";
  link: string = "#";

  constructor(private service: ArticleService) {
  }

  handleSubmit(form: HTMLFormElement) {
    if(!form.checkValidity()) {
      alert('Formulaire invalide')
      return;
    }
    const article : Article = {
      id: 0,
      description: this.description,
      imageAlt: this.imageAlt,
      imageSrc: this.imageSrc,
      link: this.link,
      titre: this.titre

    }
    alert(JSON.stringify(article))
    //this.service.addArticle(article);
  }
}
