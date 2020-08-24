import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showFiller = false;
  isDarkTheme: Observable<boolean>;
  themeButtonName = 'Light';

  constructor( private themeService: ThemeService ) {
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    switch(this.themeButtonName) {
      case 'Light': {
        this.themeButtonName = 'Dark';
        break;
      }
      case 'Dark': {
        this.themeButtonName = 'Light';
        break;
      }
      default: {
        this.themeButtonName = 'Light';
        break;
      }
    }
  }
}
