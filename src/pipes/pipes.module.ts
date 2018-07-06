import { NgModule } from '@angular/core';
import { GradeColorPipe } from './grade-color/grade-color';
import { ResourceFormatPipe } from './resource-format/resource-format';
@NgModule({
  declarations: [GradeColorPipe, ResourceFormatPipe],
  imports: [],
  exports: [GradeColorPipe, ResourceFormatPipe]
})
export class PipesModule {}
