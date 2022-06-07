import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "collections",
    loadChildren: () =>
      import("./collections/collections.module").then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: "features",
    loadChildren: () =>
      import("./features/features.module").then((m) => m.FeaturesModule),
  },
  {
    path: "weather",
    loadChildren: () =>
      import("./weather/weather.module").then((m) => m.WeatherModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  { path: "", component: LandingPageComponent },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
