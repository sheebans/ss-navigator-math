import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'multiple-choice-format',
  templateUrl: 'multiple-choice-format.html'
})
export class MultipleChoiceFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  isSelected: boolean = false;

  constructor() {}

  ngOnInit() {}

  answerSelected() {
    this.isSelected = true;
  }
}
