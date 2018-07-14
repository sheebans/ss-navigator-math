import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ComponentRef,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnChanges
} from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

import { PlayerService } from '@components/player/player.service';

@Component({
  selector: 'content-player',
  template: '<ng-container #player_container></ng-container>',
  providers: [PlayerService]
})
export class ContentPlayerComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('player_container', { read: ViewContainerRef })
  playerContainer: ViewContainerRef;

  @Input() isActive: boolean;

  @Input() content: any;

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private playerService: PlayerService
  ) {}

  ngOnChanges() {
    if (this.componentRef) {
      let instance = <ContentFormatComponent>this.componentRef.instance;
      instance.content = this.content;
      instance.isActive = this.isActive;
    }
  }

  ngOnInit() {
    if (this.content) {
      let componentType = this.playerService.getPlayerComponent(this.content);
      console.log(componentType);
      let factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      this.componentRef = this.playerContainer.createComponent(factory);
      let instance = <ContentFormatComponent>this.componentRef.instance;
      instance.content = this.content;
      instance.isActive = this.isActive;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
