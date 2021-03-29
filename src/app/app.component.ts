import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme';

  constructor() {
    const stylesheet = document.createElement('link');

    stylesheet.addEventListener('load', () => {
      document.documentElement.style.setProperty('--primary-color', 'green');
    });

    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'remote-style.css';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  }
}
