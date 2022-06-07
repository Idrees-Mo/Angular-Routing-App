import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UsersHomeComponent } from "./users-home/users-home.component";

const routes: Routes = [
  {
    path: "",
    component: UsersHomeComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
