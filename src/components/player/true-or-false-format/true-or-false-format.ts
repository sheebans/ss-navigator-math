import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'true-or-false-format',
  templateUrl: 'true-or-false-format.html'
})
export class TrueOrFalseFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  constructor() {}

  ngOnInit() {}
}
