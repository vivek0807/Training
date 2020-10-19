import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name : 'discount'
})
export class DiscountPipe{
  transform (data){
    data = data * 0.1;
    return data;
  }
}
