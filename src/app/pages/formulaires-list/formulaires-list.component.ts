import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaires-list',
  templateUrl: './formulaires-list.component.html',
  styleUrls: ['./formulaires-list.component.css']
})
export class FormulairesListComponent {


  constructor(private router: Router) {
  }
  navigateTo(destination: string) {
    this.router.navigate([destination]).then()
    // this.router.navigateByUrl(destination) -> Cette fonction entraine un rafraichissement de la page
    // Equivalent d'un F5
    // Ceci fait perdre l'intérêt d'une navigation single page qui est de ne recharger que ce dont on a besoin
  }
}
