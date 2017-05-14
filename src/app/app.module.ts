import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchService} from "./core/services/search.service";
import {AppRoutingModule} from "./app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from "./core/layout/layout.module";
import { SearchComponent } from './search/search.component';

// Own modules
import {StackexchangeComponent} from "./dashboard/stackexchange-box/stackexchange.component";
import {WeatherComponent} from "./dashboard/weather-box/weather.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SearchComponent,

        StackexchangeComponent,
        WeatherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        LayoutModule,
        AppRoutingModule
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }
