import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolldown',
  templateUrl: './scrolldown-component.html',
})
export class ScrolldownComponent {
  pauseScroll(event: MouseEvent) {
    (event.currentTarget as HTMLElement).style.animationPlayState = 'paused';
  }

  resumeScroll(event: MouseEvent) {
    (event.currentTarget as HTMLElement).style.animationPlayState = 'running';
  }
}
