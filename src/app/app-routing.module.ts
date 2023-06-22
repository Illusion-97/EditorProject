import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {RegisterComponent} from "./pages/register/register.component";
import {FormulairesListComponent} from "./pages/formulaires-list/formulaires-list.component";
import {FormulaireComponent} from "./pages/formulaire/formulaire.component";
import {FormControlComponent} from "./components/form-control/form-control.component";
import {FormulaireReactifComponent} from "./pages/formulaire-reactif/formulaire-reactif.component";
import {FormulaireDossierComponent} from "./pages/formulaire-dossier/formulaire-dossier.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/:id', component: RegisterComponent},
  {path: 'forms', component: FormulairesListComponent, children: [
      {path: 'module', component: FormulaireComponent},
      {path: 'control', component: FormControlComponent},
      {path: 'reactive', children:[
          {path: "", component: FormulaireReactifComponent},
          {path: ":id", component: FormulaireReactifComponent}
        ]},
      {path: 'dossier', component: FormulaireDossierComponent},
      {path: '**', redirectTo: 'module'}
    ]},
  {path: '**', component: NotFoundComponent},
  //{path: '**', redirectTo: ''} // Page par défaut se met TOUJOURS en dernier dans le tableau
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
