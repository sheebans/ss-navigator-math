import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AssessmentModel } from '@models/assessment/assessment';
import { AssessmentProvider } from '@providers/api/core/assessment';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { HeaderContextModel } from '@models/app/header/header-context';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@Component({
  selector: 'assessment-player',
  templateUrl: 'assessment-player.html',
  providers: [AssessmentProvider]
})
export class AssessmentPlayerComponent implements OnInit, OnChanges {
  headerContextModel: HeaderContextModel;

  headerTitleContext: HeaderTitleContextModel = { view_name: 'player' };

  @Input() id: string;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  assessment: AssessmentModel;

  @Input() activePlayerIndex: number;

  constructor(private assessmentProvider: AssessmentProvider) {}

  ngOnInit() {
    this.assessmentProvider.getAssessment(this.id).subscribe(assessment => {
      this.assessment = assessment;
      this.headerTitleContext.title = assessment.title;
    });
  }

  ngOnChanges() {
    (this.headerTitleContext.subtitle = this.lesson ? this.lesson.title : ''),
      (this.headerContextModel = {
        header_title_context: this.headerTitleContext
      });
  }

  openPlayer(data) {
    this.activePlayerIndex = data.index;
    console.log(this.activePlayerIndex);
  }
}
