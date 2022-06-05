import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvanceComponent } from "./advance/advance.component";
import { BasicComponent } from "./basic/basic.component";
import { FeaturesHomeComponent } from "./features-home/fetures-home.component";
import { ProComponent } from "./pro/pro.component";

const routes: Routes = [
  {
    path: "",
    component: FeaturesHomeComponent,
    children: [
      { path: "", component: BasicComponent },
      { path: "advance", component: AdvanceComponent },
      { path: "pro", component: ProComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
