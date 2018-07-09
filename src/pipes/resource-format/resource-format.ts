import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resourceFormat'
})
export class ResourceFormatPipe implements PipeTransform {
  transform(value: string, ...args) {
    return value.split('_resource')[0];
  }
}
