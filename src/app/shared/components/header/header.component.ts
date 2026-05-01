import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { RouterLink } from '@angular/router';
import { LucideSquareUser, LucideX, LucideMenu } from '@lucide/angular';

@Component({
  selector: 'app-header',
  imports: [HlmButton, RouterLink, LucideSquareUser, LucideX, LucideMenu],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
