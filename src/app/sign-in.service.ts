import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SignInService {
  constructor(private http: HttpClient) {}

  postToServer(formSignIn) {
    const url = "http://localhost:3000/signin";
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const body = formSignIn.value;

    return (this.http.post(url, body, { headers }).toPromise().then(res => res));
  }
}
