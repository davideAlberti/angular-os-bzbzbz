import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { CasaComponent } from './casa/casa.component';
import { DesktopComponent } from './desktop/desktop.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MatCardModule,
                  DragDropModule, HttpClientModule ],
  declarations: [ AppComponent, CasaComponent, DesktopComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DatabaseService ]
})
export class AppModule { }
