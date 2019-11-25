import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-wileyhome",
  templateUrl: "./wileyhome.component.html",
  styleUrls: ["./wileyhome.component.scss"]
})
export class WileyhomeComponent implements OnInit {
  constructor(private _http: HttpService) {}

  item: Object;

  ngOnInit() {}

  // ngOnInit() {
  //   this._http.testMethod().subscribe(data => {
  //     this.item = data;
  //     console.log(this.item);
  //   });
  // }
}
