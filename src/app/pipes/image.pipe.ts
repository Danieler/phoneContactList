import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any): any {
    const noimage = 'assets/img/noimage.png';
    if (!value) {
      return noimage;
    }
    return (value.length > 0) ? value[1].url : noimage;
  }

}
