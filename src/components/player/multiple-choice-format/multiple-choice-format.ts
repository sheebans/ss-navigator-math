import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';
import { PlayerEventService } from '@components/player/player-event.service';

@Component({
  selector: 'multiple-choice-format',
  templateUrl: 'multiple-choice-format.html',
  providers: [PlayerEventService]
})
export class MultipleChoiceFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  eventContent: any = {};

  isSelected: boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    return this.isSelected ? 'answer-selected' : 'default';
  }

  constructor(private playerEventService: PlayerEventService) {}

  ngOnInit() {
    this.eventContent.contentId = this.content.id;
  }

  answerSelected(answer: any) {
    this.isSelected = true;
    this.eventContent.isCorrect = answer.is_correct;
    this.eventContent.isSelected = true;
    this.eventContent.answerText = answer.answer_text;
    this.playerEventService.publishEvent(this.eventContent);
  }
}
