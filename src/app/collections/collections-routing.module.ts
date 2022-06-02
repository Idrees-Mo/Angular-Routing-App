import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionHomeComponent } from "./collection-home/collection-home.component";

const routes: Routes = [
  { path: "collections", component: CollectionHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
