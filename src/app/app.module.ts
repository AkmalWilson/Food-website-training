import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/partials/header/header.component';
import {HomeComponent} from './components/pages/home/home.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TopBarComponent, HeaderComponent,HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
