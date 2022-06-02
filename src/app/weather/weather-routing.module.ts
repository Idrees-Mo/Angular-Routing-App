import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherHomeComponent } from "./weather-home/weather-home.component";

const routes: Routes = [{ path: "weather", component: WeatherHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
