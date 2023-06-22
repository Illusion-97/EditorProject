import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  type : string = "text"
  articles: Article[] = []
  articlesObs: Observable<Article[]>

  constructor(private service: ArticleService) {
    this.articlesObs = this.service.getAll()
  }

  /*getAll() {
    console.log("in component get All")
    const articleObs:  Observable<Article[]> = this.service.getAll()
    // Créer un Observable revient à "préparer un traitement"
    // Pour exécuter ce traitement, il faut souscrire à l'observable
    const getAllSubscription : Subscription = articleObs.subscribe(response => this.articles = response)

  }*/
}
