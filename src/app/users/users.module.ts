import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersHomeComponent } from "./users-home/users-home.component";
import { UserComponent } from "./user/user.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [UsersHomeComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
