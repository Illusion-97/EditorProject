import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";

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

  handleSubmit() {
    alert('submit')
  }
}
