import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdleMonitorService } from '@scullyio/ng-lib';
import { Router, NavigationEnd } from '@angular/router';

import { ThemeService } from './core/services/theme.service';
import { CustomIconService } from './core/services/custom-icon.service';

declare let gtag: Function;

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
   public router: Router,
   private themeService: ThemeService,
   private customIconService: CustomIconService) {
     this.customIconService.init();
     this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
            gtag('config', 'G-9QY8E40399',
                   {
                     'page_path': event.urlAfterRedirects
                   }
                  );
          }
      });
   }

 ngOnInit() {
   this.isDarkTheme = this.themeService.isDarkTheme;
 }

 toggleDarkTheme(checked: boolean) {
  this.themeService.setDarkTheme(checked);
}
}
