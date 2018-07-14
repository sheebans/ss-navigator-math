import { NgModule } from '@angular/core';
import { GradeColorPipe } from './grade-color/grade-color';
import { ResourceFormatPipe } from './resource-format/resource-format';
import { QuestionFormatPipe } from './question-format/question-format';
@NgModule({
  declarations: [GradeColorPipe, ResourceFormatPipe, QuestionFormatPipe],
  imports: [],
  exports: [GradeColorPipe, ResourceFormatPipe, QuestionFormatPipe]
})
export class PipesModule {}
