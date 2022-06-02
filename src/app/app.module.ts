import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CollectionsModule } from "./collections/collections.module";
import { FeaturesModule } from "./features/features.module";
import { WeatherModule } from "./weather/weather.module";

@NgModule({
  declarations: [AppComponent],
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
