import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeaturesHomeComponent } from "./features-home/fetures-home.component";
import { FeaturesRoutingModule } from "./features-routing.module";
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { ProComponent } from './pro/pro.component';

@NgModule({
  declarations: [FeaturesHomeComponent, BasicComponent, AdvanceComponent, ProComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
