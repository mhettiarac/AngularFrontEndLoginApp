import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  testMethod() {
    // return this.http.get("https://api.openbrewerydb.org/breweries");
  }

  authenticate(userName, password) {
    console.log("UserName", userName);
    console.log("Password", password);
    var body = { username: userName, password: password };
    return this.http.post<HttpService>(
      "http://localhost:8080/login/user",
      body
    );
  }
}
