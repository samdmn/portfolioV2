import { Component, inject, PLATFORM_ID } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { RouterLink } from '@angular/router';
import { LucideSquareUser, LucideX, LucideMenu } from '@lucide/angular';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    HlmButton,
    RouterLink,
    LucideSquareUser,
    LucideX,
    LucideMenu,
    HlmDropdownMenuImports,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentFlag: string;
  isOpen = false;
  private platformId = inject(PLATFORM_ID);

  constructor(private translate: TranslateService) {
    this.currentFlag = this.getFlag(
      this.translate.getCurrentLang() ?? this.translate.getFallbackLang() ?? 'fr',
    );
    this.translate.onLangChange.subscribe((event) => {
      this.currentFlag = this.getFlag(event.lang);
    });
  }

  setLanguage(lang : 'fr' | 'en' | 'es') {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }

  getFlag(lang: string): string {
    switch (lang) {
      case 'fr':
        return '🇫🇷';
      case 'en':
        return '🇺🇸';
      case 'es':
        return '🇪🇸';
      default:
        return '🌐';
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
