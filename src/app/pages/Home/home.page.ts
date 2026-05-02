import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { LucideSend } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrolldownComponent } from './components/scrolldown.component';

@Component({
  selector: 'app-home',
  imports: [
    HlmButton,
    LucideSend,
    RouterLink,
    TranslateModule,
    ScrolldownComponent,
  ],
  templateUrl: './home.page.html',
})
export class HomePage {}
