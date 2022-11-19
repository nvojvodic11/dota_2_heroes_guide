import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dota2 Hero Guide';
  toolBarTitle = 'dota2HeroGuide';
  navigationRoutes = [
    {
      title: 'home',
      route: '/home'
    },
    {
      title: 'heroes',
      route: '/heroes'
    },
    {
      title: 'items',
      route: '/items'
    },
    {
      title: 'guides',
      route: '/guides'
    }
  ]
}
