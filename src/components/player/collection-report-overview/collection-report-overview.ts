import { Component, Input } from '@angular/core';
import { CollectionModel } from '@models/collection/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';

@Component({
  selector: 'collection-report-overview',
  templateUrl: 'collection-report-overview.html'
})
export class CollectionReportOverviewComponent {
  @Input() collection: CollectionModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  constructor() {}
}
