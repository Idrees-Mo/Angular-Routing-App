import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeturesHomeComponent } from "./fetures-home/fetures-home.component";

const routes: Routes = [{ path: "features", component: FeturesHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
