import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({ // La classe est chargée dans le contexte d'Angular
  providedIn: 'root'
})
export class ArticleService {

  /*private articles : Article[] = [
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
  ]*/

  private URL: string = environment.API_URL + "664/articles"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]> {
    console.log("in service get All")
    // Sans aucune précisions, le type de retour est Observable<Object>, prenez l'habitude de typer vos retours.
    return this.http.get<Article[]>(this.URL)
  }

  byId(id: number) : Observable<Article> {
    return this.http.get<Article>(`${this.URL}/${id}`)
  }

  createArticle(article: Article) {
    return this.http.post<Article>(`${this.URL}`, article)
  }

  update(article: Article) :Observable<Article> {
    // @ts-ignore
    return this.http.put<Article>(`${this.URL}/${article.id}`, article)
  }

 /* addArticle(article: Article) {
    this.articles.push(article)
  }

  get listArticles() {
    return this.articles
  }*/
  delete(id : number) {
    return this.http.delete<Article>(`${this.URL}/${id}`)
  }
}
