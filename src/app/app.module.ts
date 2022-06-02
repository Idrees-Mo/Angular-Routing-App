import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CollectionsModule } from "./collections/collections.module";
import { FeaturesModule } from "./features/features.module";
import { WeatherModule } from "./weather/weather.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, NotFoundPageComponent],
  imports: [
    BrowserModule,
    CollectionsModule,
    FeaturesModule,
    WeatherModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
