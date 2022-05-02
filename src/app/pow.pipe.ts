import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let res = value;
    for(let i=1;i<args[0];i++)
    {
      res=res*value;
    }
    return res;
  }

}
