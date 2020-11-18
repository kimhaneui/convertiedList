import { Pipe, PipeTransform } from '@angular/core';
// import {} from 'moment'
@Pipe({
  name: 'my-pipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const yoil = {
      1: '(월)',
      2: '(화)',
      3: '(수)',
      4: '(목)',
      5: '(금)',
      6: '(토)',
      7: '(일)',
    };

    // return moment(value).format('yyyy.MM.DD') + ' ' + yoil[moment(value).day()]);
  }

}
