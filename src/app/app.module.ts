import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubMenuComponent } from './components/menu/sub-menu/sub-menu.component';
import { SearchComponent } from './components/sidebar/search/search.component';
import {FormsModule} from "@angular/forms";
import { MiniPostComponent } from './components/sidebar/mini-post/mini-post.component';
import { PostToLengthPipe } from './pipes/post-to-length.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HomeComponent } from './pages/home/home.component';
import { TextColorDirective } from './directives/text-color.directive';
import { DuplicateDirective } from './directives/duplicate.directive';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    SubMenuComponent,
    SearchComponent,
    MiniPostComponent,
    PostToLengthPipe,
    TruncatePipe,
    HomeComponent,
    TextColorDirective,
    DuplicateDirective,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Composants devant être chargés au démarrage (nécessaires pour le fichier index.html)
})
export class AppModule { }
