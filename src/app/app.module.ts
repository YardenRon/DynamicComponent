import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { DynamicHostDirective } from './shared/directives/dynamic-host.directive';
import { ColoredItemComponent } from './components/colored-item/colored-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContainerComponent,
    DynamicHostDirective,
    ColoredItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
