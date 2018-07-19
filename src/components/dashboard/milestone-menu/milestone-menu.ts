import { Component, Input } from '@angular/core';

@Component({
  selector: 'milestone-menu',
  templateUrl: 'milestone-menu.html'
})
export class MilestoneMenuComponent {
  defaultLength: number = 50.5;

  newUnitSectionStartLength: number = 61.5;

  @Input() milestones;

  @Input() location;

  learningPaths: Array<Object> = [];

  learningPathModel: Object = {};

  imageX: number = 0;

  imageY: number = 0;

  lineX: number = 10;

  lineY1: number = 20;

  lineY2: number = 50;

  height: number;

  constructor() {}

  ngOnInit() {
    console.log(this.location);
    this.milestones.forEach((milestone, milestoneIndex) => {
      if (milestoneIndex == 0) {
        this.calculateCoordinates('milestone', 60.5, 60.5, 60.5, false);
      } else {
        this.calculateCoordinates('milestone', 60.5, 60.5, 60.5, true);
      }
      milestone.units.forEach((unit, unitIndex) => {
        unit.lessons.forEach((lesson, index) => {
          if (lesson.lesson_id == this.location.lessonId) {
            this.calculateCoordinates(
              'lesson',
              this.newUnitSectionStartLength,
              this.newUnitSectionStartLength,
              this.newUnitSectionStartLength,
              true
            );
            this.location.collection.forEach((collection, collectionIndex) => {
              if (collection.format == 'collection') {
                this.calculateCoordinates('collection', 55, 55, 55, true);
              } else {
                this.calculateCoordinates('assessment', 55, 55, 55, true);
              }
            });
          } else if (
            this.milestones.length - 1 == milestoneIndex &&
            milestone.units.length - 1 == unitIndex &&
            unit.lessons.length - 1 == index
          ) {
            //Remove last line
            this.calculateCoordinates(
              'lesson',
              this.newUnitSectionStartLength,
              this.newUnitSectionStartLength,
              this.newUnitSectionStartLength,
              false
            );
          } else if (
            milestone.units.length - 1 == unitIndex &&
            unit.lessons.length - 1 == index
          ) {
            //Position of milestone image after first milestone
            this.calculateCoordinates('lesson', 57.5, 57.5, 57.5, true);
          } else if (unit.lessons.length - 2 == index) {
            //Position line of last before lesson in unit section
            this.calculateCoordinates(
              'lesson',
              this.defaultLength,
              this.defaultLength,
              this.defaultLength + 12,
              true
            );
          } else if (unit.lessons.length == 1) {
            //Position line if only one lesson is present in unit section
            this.calculateCoordinates(
              'lesson',
              this.newUnitSectionStartLength,
              this.newUnitSectionStartLength,
              this.defaultLength + 12,
              true
            );
          } else if (unit.lessons.length - 1 == index) {
            //Position of first lesson after unit section
            this.calculateCoordinates(
              'lesson',
              this.newUnitSectionStartLength,
              this.newUnitSectionStartLength,
              this.defaultLength,
              true
            );
          } else {
            //Position of lesson section
            this.calculateCoordinates(
              'lesson',
              this.defaultLength,
              this.defaultLength,
              this.defaultLength,
              true
            );
          }
        });
      });
    });
    console.log(this.learningPaths);
  }

  calculateCoordinates(
    imageName: string,
    imageYLength: number,
    lineY1Length: number,
    lineY2Length: number,
    drawLine: boolean
  ) {
    this.learningPaths.push({
      imageX: this.imageX,
      imageY: this.imageY,
      lineX1: this.lineX,
      lineX2: this.lineX,
      lineY1: this.lineY1,
      lineY2: this.lineY2,
      drawLine: drawLine,
      imageName: imageName
    });
    this.imageY = this.imageY + imageYLength;
    this.lineY1 = this.lineY1 + lineY1Length;
    this.lineY2 = this.lineY2 + lineY2Length;
    this.height = this.lineY2;
  }
}
