import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log('args: ' + args);
    
    if (value.indexOf(args) > -1) {
      return value;
    } else {
      return null;
    }
  }
}
