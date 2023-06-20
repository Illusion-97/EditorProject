import { Component } from '@angular/core';

@Component({ // décorateur
  selector: 'app-root', // sert à appeler le composant
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EditorProject';
}
