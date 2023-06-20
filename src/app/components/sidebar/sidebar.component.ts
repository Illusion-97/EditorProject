import { Component } from '@angular/core';
import {IMiniPost} from "./mini-post/imini-post";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  paragraphe : string = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  paragraphe2 : string;


  part1: string = "Aenean ornare velit lacus,";
  part2: string = "ac varius enim lorem ullamcorper dolore aliquam."

  img1: string = "assets/images/pic07.jpg"
  img2: string = "pic08.jpg"

  miniPost : IMiniPost = {
    image : "assets/images/pic09.jpg",
    paragraph : "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  }
  constructor() {
    this.paragraphe2 = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  }

  onClick() {
    alert(this.miniPost.paragraph)
  }

  onMouseEvent(event : MouseEvent) {
    alert(event.button)
  }

  onParagraphChange(event : string) {
    alert(event)
  }
}
