import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'multiple-select-image-format',
  templateUrl: 'multiple-select-image-format.html'
})
export class MultipleSelectImageFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
