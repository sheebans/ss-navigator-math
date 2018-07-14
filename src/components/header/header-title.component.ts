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
import { HeaderTitleContextComponent } from '@components/header/header-title-context.component';
import { HeaderService } from '@components/header/header.service';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@Component({
  selector: 'header-title',
  template: '<ng-container #header_title_container></ng-container>',
  providers: [HeaderService]
})
export class HeaderTitleComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('header_title_container', { read: ViewContainerRef })
  headerTitleContainer: ViewContainerRef;

  @Input() context: HeaderTitleContextModel;

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private headerService: HeaderService
  ) {}

  ngOnChanges() {
    if (this.componentRef) {
      let instance = <HeaderTitleContextComponent>this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnInit() {
    if (this.context) {
      let componentType = this.headerService.getAppHeaderTitleComponent(
        this.context.view_name
      );
      let factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      this.componentRef = this.headerTitleContainer.createComponent(factory);
      let instance = <HeaderTitleContextComponent>this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
