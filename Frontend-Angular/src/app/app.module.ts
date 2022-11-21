import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.components';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffect } from './components/heroes/state/heroes.effect';
import { heroesReducer } from './components/heroes/state/heroes.reducer';
import { HttpErrorInterceptor } from './components/http-interceptor/http-error-interceptor.service';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { itemsReducer } from './components/items/state/items.reducer';
import { ItemsEffect } from './components/items/state/items.effect';
import { reducers } from './reducers';
import { ItemFormComponent } from './components/items/item-form/item-form.component';
import { GuidesComponent } from './components/guides/guides.component';
import { GuideFormComponent } from './components/guides/guide-form/guide-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    HeroFormComponent,
    ItemsComponent,
    ItemFormComponent,
    GuidesComponent,
    GuideFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({}), 
    StoreModule.forFeature('heroes', heroesReducer),
    StoreModule.forFeature('items', itemsReducer),
    EffectsModule.forRoot([HeroesEffect, ItemsEffect])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
