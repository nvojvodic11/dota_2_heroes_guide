import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend-Angular';
  toolBarTitle = 'dota2HeroGuide';
  navigationRoutes = [
    {
      title: 'home',
      route: '/home'
    },
    {
      title: 'heroes',
      route: '/heroes'
    }
  ]
}
