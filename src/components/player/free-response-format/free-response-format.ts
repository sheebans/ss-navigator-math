import {
  Component,
  ElementRef,
  Input,
  OnInit,
  HostBinding
} from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';
import { PlayerEventService } from '@components/player/player-event.service';

@Component({
  selector: 'free-response-format',
  templateUrl: 'free-response-format.html',
  providers: [PlayerEventService]
})
export class FreeResponseFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  answered: boolean = false;

  eventContent: any = {};

  @HostBinding('class')
  get hostClasses(): string {
    return this.answered ? 'answer' : 'default';
  }
  constructor(
    public element: ElementRef,
    private playerEventService: PlayerEventService
  ) {}

  ngOnInit() {
    console.log(this.content);
  }

  enterAnswer(answer: any) {
    this.answered = true;
    this.eventContent.isCorrect = answer.is_correct;
    this.eventContent.isSelected = true;
    this.eventContent.answerText = answer.answer_text;
    this.playerEventService.publishEvent(this.eventContent);
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
