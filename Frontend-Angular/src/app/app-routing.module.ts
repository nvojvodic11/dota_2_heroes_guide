import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.components';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemFormComponent } from './components/items/item-form/item-form.component';
import { GuidesComponent } from './components/guides/guides.component';
import { GuideFormComponent } from './components/guides/guide-form/guide-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'add/new/hero',
    component: HeroFormComponent
  },
  {
    path: 'add/new/hero/:id',
    component: HeroFormComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'add/new/item',
    component: ItemFormComponent
  },
  {
    path: 'add/new/item/:id',
    component: ItemFormComponent
  },
  {
    path: 'guides',
    component: GuidesComponent
  },
  {
    path: 'add/new/guide',
    component: GuideFormComponent
  },
  {
    path: 'add/new/guide/:id',
    component: GuideFormComponent
  },
  { 
    path: '**',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
