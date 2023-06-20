import { Pipe, PipeTransform } from '@angular/core';
import {IMiniPost} from "../components/sidebar/mini-post/imini-post";

@Pipe({
  name: 'postToLength'
})
export class PostToLengthPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.length;
  }

}
