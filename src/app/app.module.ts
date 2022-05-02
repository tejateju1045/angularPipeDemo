import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuiltComponent } from './inbuilt/inbuilt.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SqrPipe } from './sqr.pipe';
import { PowPipe } from './pow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InbuiltComponent,
    CustompipeComponent,
    SqrPipe,
    PowPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
