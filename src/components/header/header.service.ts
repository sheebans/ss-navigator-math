import { Injectable } from '@angular/core';
import { DefaultHeaderTitleComponent } from '@components/header/default-header-title/default-header-title';
import { PlayerHeaderTitleComponent } from '@components/header/player-header-title/player-header-title';

@Injectable()
export class HeaderService {
  appHeaderTitleMapper: object = {
    default: DefaultHeaderTitleComponent,
    player: PlayerHeaderTitleComponent
  };

  constructor() {}

  /**
   * It will identify the suitable app header title component based on type.
   * @param  {string} view_name
   * @return {[HeaderTitleComponent]}
   */
  getAppHeaderTitleComponent(view_name?: string) {
    let appHeaderTitleComponent =
      this.appHeaderTitleMapper[view_name] || DefaultHeaderTitleComponent;
    return appHeaderTitleComponent;
  }
}
