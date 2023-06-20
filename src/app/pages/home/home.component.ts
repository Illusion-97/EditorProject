import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  type : string = "text"

  constructor(private service: ArticleService) {
  }

  get articles() {
    return this.service.listArticles
  }
}
