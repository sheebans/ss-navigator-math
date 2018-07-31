import { Component, HostListener, ElementRef } from '@angular/core';

/**
 * Generated class for the SmileyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'smiley',
  templateUrl: 'smiley.html'
})
export class SmileyComponent {
  currentReaction: string;

  isOpen: boolean = false;

  isSelected: boolean = false;

  constructor(private element: ElementRef) {}

  reactions: Array<object> = [
    {
      id: 1,
      selected: false
    },
    {
      id: 2,
      selected: false
    },
    {
      id: 3,
      selected: false
    },
    {
      id: 4,
      selected: false
    },
    {
      id: 5,
      selected: false
    }
  ];

  @HostListener('click', ['$event'])
  openEmotions(e): void {
    this.isOpen = !this.isOpen;
    var slider = this.element.nativeElement.querySelector('.slider');
    if (slider.classList.contains('open')) {
      slider.classList.remove('open');
      slider.classList.add('close');
    } else {
      slider.classList.remove('close');
      slider.classList.add('open');
    }
  }

  selectReaction(reaction: any): void {
    this.currentReaction = reaction.id;
    this.isSelected = true;
  }
}
