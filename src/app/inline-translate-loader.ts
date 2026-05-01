import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import fr from '../../public/assets/i18n/fr.json';
import en from '../../public/assets/i18n/en.json';
import es from '../../public/assets/i18n/es.json'

export class InlineTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const translations: Record<string, any> = { fr, en, es };
    return of(translations[lang] ?? translations['fr']);
  }
}
