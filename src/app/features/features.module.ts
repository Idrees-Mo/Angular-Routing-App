import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeturesHomeComponent } from "./fetures-home/fetures-home.component";
import { FeaturesRoutingModule } from "./features-routing.module";

@NgModule({
  declarations: [FeturesHomeComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
