import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [DirectoryComponent, DirectoryListComponent],
  imports: [CommonModule, DirectoryRoutingModule, ScullyLibModule, MaterialModule],
})
export class DirectoryModule {}
