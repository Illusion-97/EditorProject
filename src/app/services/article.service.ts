import { Injectable } from '@angular/core';
import {Article} from "../models/article";

@Injectable({ // La classe est chargée dans le contexte d'Angular
  providedIn: 'root'
})
export class ArticleService {

  private articles : Article[] = [
    {
      titre: "Interdum aenean",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic01.jpg",
      imageAlt: "",
      link: "#"
    },
    {
      titre: "Nulla amet dolore",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "",
      imageAlt: "",
      link: "#"
    },
    {
      titre: "Tempus ullamcorper",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic03.jpg",
      imageAlt: "",
      link: "#"
    },
    {
      titre: "Sed etiam facilis",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic04.jpg",
      imageAlt: "",
      link: "#"
    },
    {
      titre: "Feugiat lorem aenean",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "",
      imageAlt: "",
      link: "#"
    },
    {
      titre: "Amet varius aliquam",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic06.jpg",
      imageAlt: "",
      link: "#"
    },
  ]

  constructor() { }

  addArticle(article: Article) {
    this.articles.push(article)
  }

  get listArticles() {
    return this.articles
  }
}
