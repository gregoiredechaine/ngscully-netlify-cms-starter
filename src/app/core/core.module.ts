import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from './services/theme.service';
import { CustomIconService } from './services/custom-icon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ThemeService,
    CustomIconService,
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule { }
