import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ampm'
})
export class AmpmPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = new Date(value);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let aminutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    let strTime = ampm + ' ' + hours + ':' + aminutes;
    return strTime;
  }

}
