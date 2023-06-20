import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMiniPost} from "./imini-post";
import {MiniPost} from "./mini-post";

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.css']
})
export class MiniPostComponent {
  @Input()
  image: string = "";

  paragraph : string = "";

  @Output()
  paragraphChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  miniPostImpl: IMiniPost = {
    image : "",
    paragraph : ""
  }

  @Output()
  miniPostImplChange : EventEmitter<IMiniPost> = new EventEmitter<IMiniPost>()

  miniPost : MiniPost = new MiniPost("","");

  miniPostDefault : MiniPostDefault = new MiniPostDefault();

  notifyParent(value: string) {
    this.paragraphChange.emit(value)
  }

  getLength(value : string) {
    return value.length;
  }

  getParagraphLength(value: IMiniPost) {
    return value.paragraph.length
  }
}

class MiniPostDefault {
  image: string = ""
  paragraph: string = ""
}
