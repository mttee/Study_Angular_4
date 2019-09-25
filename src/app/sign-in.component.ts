import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { SignInService } from './sign-in.service'

@Component({
  selector: "app-sign-in",
  template: `
    <form (ngSubmit)="getValueSubmit(formSignIn)" #formSignIn="ngForm">
      <input
        placeholder="Email"
        [(ngModel)]="email"
        #txtEmail="ngModel"
        name="email"
        required
      />
      <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
        Email is required
      </p>
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        [(ngModel)]="password"
        #txtPassword="ngModel"
        name="password"
        minlength="6"
        pattern="[a-z]*"
      />
      <br /><br />
      <div ngModelGroup="subjects">
        <label
          ><input
            type="checkbox"
            [ngModel]="false"
            name="NodeJS"
          />NodeJS</label
        >
        <label
          ><input
            type="checkbox"
            [ngModel]="false"
            name="Angular"
          />Angular</label
        >
        <label
          ><input
            type="checkbox"
            [ngModel]="false"
            name="ReactJS"
          />ReactJS</label
        >
      </div>
      <button [disabled]="formSignIn.invalid">Sign In</button>
    </form>
    <button (click)="postToExpress()">POST</button>
    <button (click)="getValueSubmit(formSignIn)">POST</button>
    <p>{{ txtPassword.errors | json }}</p>
    <p>{{ formSignIn.value | json }}</p>
  `
})
export class SignInComponent {
  constructor(private http: HttpClient, private SignInService: SignInService) {}

  email = "";
  password = "";

  //   getValueSubmit(){
  //       console.log(this.email);
  //       console.log(this.password);

  //   }

  getValueSubmit(formSignIn) {
    // const url = "http://localhost:3000/signin";
    // const headers = new HttpHeaders({ "Content-Type": "application/json" });
    // const body = (formSignIn.value);

    // this.http
    //   .post(url, body, { headers })
    //   .subscribe(res => console.log(res));


    //Tach ra service
    this.SignInService.postToServer(formSignIn)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  postToExpress() {
    const url = "http://localhost:3000/signin";
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const body = { name: "Minh Trí" };

    //Lưu ý chổ này angular mặc định trả về json nhưng server trả về là text thì lỗi ngay
    //Nên ta phải quy định responseType kiểu trả về của nó thôi là lỗi nát bét
    this.http
      .post(url, body, { headers, responseType: "text" })
      .subscribe(res => console.log(res));
  }
}
