import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'fill-in-the-blank-format',
  templateUrl: 'fill-in-the-blank-format.html'
})
export class FillInTheBlankFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
