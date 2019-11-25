import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username = "testx";
  password = "test";
  private isInvalidAuth: boolean = false;
  result: Object;
  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    this._http
      .authenticate(this.username, this.password) //.subscribe(result => this.evaluate(result));
      .subscribe(data => {
        this.result = data;
        console.log("Returned value from API : " + this.result);
        if (this.result == true) {
          this.router.navigateByUrl("/home");
        }
        if (this.result == false) {
          this.router.navigateByUrl("/");
        }
      });
  }
}
