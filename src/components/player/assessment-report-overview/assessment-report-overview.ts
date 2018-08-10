import { Component, Input } from '@angular/core';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { AssessmentModel } from '@models/assessment/assessment';

@Component({
  selector: 'assessment-report-overview',
  templateUrl: 'assessment-report-overview.html'
})
export class AssessmentReportOverviewComponent {
  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  score: number = 66;

  constructor() {}
}
