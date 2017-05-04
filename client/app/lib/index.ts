import * as lib from './';

import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigatorEffects } from './effects/navigator';
import { RouterEffects } from './effects/router';
import { RouterModule } from '@angular/router';
import { WindowEffects } from './effects/window';

/**
 * pi-lib module definition
 *
 * import { PiModule } from 'pi-lib';
 *
 * @NgModule({ ... imports: [PiModule, ...] ...})
 */

export * from './components/code-viewer';
export * from './components/markdown';
export * from './components/multi-selector';
export * from './components/no-data-on-page';
export * from './components/polymer-app';
export * from './components/polymer-form';
export * from './components/navigator';
export * from './containers/404-page';
export * from './pipes/breakable';
export * from './pipes/ellipsize';
export * from './pipes/jsonify';
export * from './pipes/linkify';
export * from './pipes/markdown';
export * from './pipes/moment';
export * from './pipes/numeral';
export * from './services/configurator';
export * from './services/env';
export * from './utils';

const COMPONENTS = [
  lib.CodeViewerComponent,
  lib.FourOhFourPageComponent,
  lib.MarkdownComponent,
  lib.MultiSelectorComponent,
  lib.MultiSelectorControlDirective,
  lib.NavigatorComponent,
  lib.NavigatorGroupComponent,
  lib.NoDataOnPageComponent,
  lib.PolymerAppComponent,
  lib.PolymerControlDirective,
  lib.PolymerFormComponent
];

const PIPES = [
  lib.BreakablePipe,
  lib.DateFormatPipe,
  lib.DurationPipe,
  lib.FromUnixTimePipe,
  lib.EllipsizePipe,
  lib.JSONifyPipe,
  lib.LinkifyPipe,
  lib.MarkdownPipe,
  lib.NumeralPipe,
  lib.UTCFormatPipe
];

const SERVICES = [
  lib.EnvService,
  lib.ConfiguratorService
];

@NgModule({

  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],

  exports: [
    ...COMPONENTS,
    ...PIPES
  ],

  imports: [
    CommonModule,
    EffectsModule.run(RouterEffects),
    EffectsModule.run(NavigatorEffects),
    EffectsModule.run(WindowEffects),
    FlexLayoutModule,
    RouterModule
  ],

  providers: [
    ...SERVICES
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class PiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PiModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
