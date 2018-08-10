import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GradeColorPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'gradeColor'
})
export class GradeColorPipe implements PipeTransform {
  transform(value: number) {
    if (value < 50) {
      return '#f53d3d';
    } else if (value > 50 && value < 75) {
      return '#e88f3f';
    } else if (value > 50) {
      return '#2f9e4b';
    }
  }
}
