import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'highlight-text-format',
  templateUrl: 'highlight-text-format.html'
})
export class HighlightTextFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
