import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.components';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffect } from './components/heroes/state/heroes.effect';
import { heroesReducer } from './components/heroes/state/heroes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({heroes: heroesReducer}),
    EffectsModule.forRoot([HeroesEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
