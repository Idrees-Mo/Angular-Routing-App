import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeaturesHomeComponent } from "./features-home/fetures-home.component";
import { FeaturesRoutingModule } from "./features-routing.module";

@NgModule({
  declarations: [FeaturesHomeComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
