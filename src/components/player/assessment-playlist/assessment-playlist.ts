import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AssessmentModel } from '@models/assessment/assessment';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { AssessmentBidirectionalPlaylistComponent } from '@components/player/assessment-playlist/assessment-bidirectional-playlist/assessment-bidirectional-playlist';
import { AssessmentForwardNavigationPlaylistComponent } from '@components/player/assessment-playlist/assessment-forward-navigation-playlist/assessment-forward-navigation-playlist';
import { AssessmentContentFormatComponent } from '@components/player/assessment-playlist/assessment-content-format.component';

@Component({
  selector: 'assessment-playlist',
  template: '<ng-container #assessment_container></ng-container>'
})
export class AssessmentPlaylistComponent implements OnInit {
  @ViewChild('assessment_container', { read: ViewContainerRef })
  assessmentContainer: ViewContainerRef;

  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Input() activePlayerIndex: number;

  private componentRef: ComponentRef<{}>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    let componentType = this.assessment.setting.bidirectional_play
      ? AssessmentBidirectionalPlaylistComponent
      : AssessmentForwardNavigationPlaylistComponent;
    let factory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );
    this.componentRef = this.assessmentContainer.createComponent(factory);
    let instance = <AssessmentContentFormatComponent>this.componentRef.instance;
    instance.assessment = this.assessment;
    instance.unit = this.unit;
    instance.lesson = this.lesson;
    instance.activePlayerIndex = this.activePlayerIndex;
  }

  OnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
