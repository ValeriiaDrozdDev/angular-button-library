import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilledButtonModule } from 'filled-button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FilledButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
