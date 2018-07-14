import { HeaderComponent } from '@components/header/app-header/app-header';
import { HeaderTitleComponent } from '@components/header/header-title.component';
import { DefaultHeaderTitleComponent } from '@components/header/default-header-title/default-header-title';
import { PlayerHeaderTitleComponent } from '@components/header/player-header-title/player-header-title';

export const HEADER_TITLE_COMPONENTS = [
  HeaderTitleComponent,
  DefaultHeaderTitleComponent,
  PlayerHeaderTitleComponent
];

export const HEADER_COMPONENTS = [HeaderComponent, HEADER_TITLE_COMPONENTS];
