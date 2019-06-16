import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavigationPaneComponent } from './components/navigation-pane/navigation-pane.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationPaneComponent,
    RestaurantTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
