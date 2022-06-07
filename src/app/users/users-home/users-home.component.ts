import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users-home",
  templateUrl: "./users-home.component.html",
  styleUrls: ["./users-home.component.scss"],
})
export class UsersHomeComponent implements OnInit {
  users: any;

  constructor() {}

  ngOnInit(): void {
    this.users = [
      { id: 1, name: "Idrees" },
      { id: 2, name: "Azhaan" },
      { id: 3, name: "Hoorain" },
      { id: 4, name: "Eraf" },
    ];
  }
}
