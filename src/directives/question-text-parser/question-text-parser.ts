import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the GruFibDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[question-text-parser]' // Attribute selector
})
export class QuestionTextParserDirective {
  @Input('question-text-parser') question: any;

  @Input() type?: string;

  @Input() color?: string;

  COLOR: string = 'white';

  PREFIX = 'https';

  INPUT_TAG: string = "<input class='question-fib' type='text'/>";

  FIB_REGEX = {
    global: /(\[.*?\])|_______*/g
  };

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    this.color = this.color ? this.color : this.COLOR;
    if (this.type == 'fib') {
      const questionInput = this.question.replace(
        this.FIB_REGEX.global,
        this.INPUT_TAG
      );
      this.elementRef.nativeElement.innerHTML = questionInput;
    } else {
      this.elementRef.nativeElement.innerHTML = this.question;
    }
    this.toMathText();
  }

  toMathText() {
    let equationElement = this.elementRef.nativeElement.querySelectorAll(
      'img',
      '.AM'
    );
    if (equationElement.length > 0) {
      equationElement.forEach(element => {
        element.src = this.changeImageColor(element.src);
      });
    }
    eval(
      'MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.elementRef.nativeElement])'
    );
  }

  changeImageColor(imageUrl) {
    imageUrl = imageUrl.replace('file', this.PREFIX);
    return imageUrl.replace(/[?]/, `?%5C${this.color}`);
  }
}
