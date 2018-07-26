import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogTruncate'
})
export class BlogTruncatePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    value = value.substring(0, 100);
    value += '...';
    return value;
  }

}
