import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.page.html',
})
export class HomePage {
  protected readonly title = signal('portfolioV2');
}
