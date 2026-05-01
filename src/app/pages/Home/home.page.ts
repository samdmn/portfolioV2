import { Component } from '@angular/core';
import { WipComponent } from '../../shared/components/wip/wip.component';
import { HlmButton } from '@spartan-ng/helm/button';
import { LucideSend } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [WipComponent, HlmButton, LucideSend, RouterLink],
  templateUrl: './home.page.html',
})
export class HomePage {}
