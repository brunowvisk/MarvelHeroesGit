import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { rootRouterConfig } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './navigation/characters/character/character.component';
import { CharactersComponent } from './navigation/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    CharacterComponent,
    CharactersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
