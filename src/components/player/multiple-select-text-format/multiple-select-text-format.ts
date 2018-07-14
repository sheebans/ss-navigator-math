import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'multiple-select-text-format',
  templateUrl: 'multiple-select-text-format.html'
})
export class MultipleSelectTextFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
