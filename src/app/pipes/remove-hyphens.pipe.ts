import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHyphens',
  standalone: true
})
export class RemoveHyphensPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replaceAll("-", " ")
  }
}
