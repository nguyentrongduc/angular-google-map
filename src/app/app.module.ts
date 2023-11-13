import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { UserSelectLocationComponent } from './user-select-location/user-select-location.component';
import { ListLocationSelectedComponent } from './list-location-selected/list-location-selected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { StatusLabelComponent } from './status-label/status-label.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectLocationComponent,
    ListLocationSelectedComponent,
    StatusLabelComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnpHvEPrzp1XwaWKkm8XbWakKVWwQdIi8', // Replace with your actual API key
    }),
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
