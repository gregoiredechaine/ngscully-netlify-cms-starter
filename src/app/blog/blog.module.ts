import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgxMasonryModule
  ],
})
export class BlogModule {}
