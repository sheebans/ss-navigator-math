import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'free-response-format',
  templateUrl: 'free-response-format.html'
})
export class FreeResponseFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  answered: boolean = false;

  constructor(public element: ElementRef) {}

  ngOnInit() {}

  enteredAnswer(answer: string) {
    this.answered = true;
    this.autoAdjust();
  }

  autoAdjust() {
    const textArea = this.element.nativeElement.getElementsByTagName(
      'textarea'
    )[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
