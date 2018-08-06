import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'multiple-select-image-format',
  templateUrl: 'multiple-select-image-format.html'
})
export class MultipleSelectImageFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  question: object = {};

  isSelected: boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    return this.isSelected ? 'answer-selected' : 'default';
  }

  constructor() {}

  ngOnInit() {
    this.question = Object.assign({}, this.content);
  }

  answerSelected(answer) {
    this.isSelected = true;
    answer.isSelected = !answer.isSelected;
  }
}
