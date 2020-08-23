import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdleMonitorService } from '@scullyio/ng-lib';

import { ThemeService } from './core/services/theme.service';
import { CustomIconService } from './core/services/custom-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Scottfield Auto Centre';
  isDarkTheme: Observable<boolean>;

 constructor (
   private idle: IdleMonitorService,
   private themeService: ThemeService,
   private customIconService: CustomIconService) {
     this.customIconService.init();
   }

 ngOnInit() {
   this.isDarkTheme = this.themeService.isDarkTheme;
 }

 toggleDarkTheme(checked: boolean) {
  this.themeService.setDarkTheme(checked);
}
}
