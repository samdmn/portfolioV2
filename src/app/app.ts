import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
})
export class App {
  private platformId = inject(PLATFORM_ID);

  constructor(private translate: TranslateService) {
    let lang = 'fr';
    if (isPlatformBrowser(this.platformId)) {
      lang = localStorage.getItem('lang') ?? 'fr';
    }
    this.translate.use(lang);
  }
}
