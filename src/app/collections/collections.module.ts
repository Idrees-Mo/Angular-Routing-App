import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CollectionHomeComponent } from "./collection-home/collection-home.component";
import { CollectionsRoutingModule } from "./collections-routing.module";

@NgModule({
  declarations: [CollectionHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule],
})
export class CollectionsModule {}
