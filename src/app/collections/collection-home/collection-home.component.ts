import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-collection-home",
  templateUrl: "./collection-home.component.html",
  styleUrls: ["./collection-home.component.scss"],
})
export class CollectionHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  loadWeather() {
    this.router.navigate(["/weather"]);
  }
}
