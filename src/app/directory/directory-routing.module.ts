import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryComponent } from './directory.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';

const routes: Routes = [
  {
    path: '',
    component: DirectoryListComponent,
  },
  {
    path: ':slug',
    component: DirectoryComponent,
  },
  {
    path: '**',
    component: DirectoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoryRoutingModule {}
