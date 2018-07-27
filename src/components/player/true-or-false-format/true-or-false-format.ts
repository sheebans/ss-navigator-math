import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'true-or-false-format',
  templateUrl: 'true-or-false-format.html'
})
export class TrueOrFalseFormatComponent
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
