import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
