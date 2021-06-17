import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuBarModule} from './components/menu-bar/menu-bar.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppStoreModule} from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuBarModule,
    ReactiveFormsModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
