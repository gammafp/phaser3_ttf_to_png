import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './filters/pretty-json.pipe';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PrettyJsonPipe
    ],
    imports: [
        ColorPickerModule,
        FormsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
