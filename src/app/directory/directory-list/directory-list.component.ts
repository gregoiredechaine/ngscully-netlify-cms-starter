import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.scss'],
})
export class DirectoryListComponent implements OnInit {

  constructor(private srs: ScullyRoutesService) {}

  directoryList$ =

  this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/directory/`))
    ),
    tap((data) => {
      console.log(data);
    })
  );


  ngOnInit() {}
}
