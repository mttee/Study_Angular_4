import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  template: `
    <form (ngSubmit)="getValueSubmit()" [formGroup]="formSignUp">
      <input placeholder="Email" formControlName="email" />
      <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched">Email is require</p>
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        formControlName="password"
      />
      <br /><br />
      <div formGroupName="subject">
        <label>
          <input type="checkbox" name="NodeJS" formControlName="NodeJS" />NodeJS
        </label>
        <label>
            <input type="checkbox" name="Angular" formControlName="Angular"/>Angular
        </label>
        <label>
            <input type="checkbox" name="ReactJS" formControlName="ReactJS"/>ReactJS
        </label>
      </div>
      <br /><br />
      <button>Sign In</button>
    </form>
    <code>{{ formSignUp.controls.email.errors | json}}</code>
  `
})
export class SignUpComponent implements OnInit {
   
  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.formSignUp = new FormGroup({
    //   email: new FormControl('Minh Trí'),
    //   password: new FormControl(),
    //   subject: new FormGroup({
    //     NodeJS: new FormControl(true),
    //     Angular: new FormControl(false),
    //     ReactJS: new FormControl(true)
    //   })
    // });

    //Form Builder
    // this.formSignUp = fb.group({
    //     email:('Minh Trí'),
    //     password:'',
    //     subject: fb.group({
    //       NodeJS: true,
    //       Angular: false,
    //       ReactJS: true
    //     })
    //   });
  }

ngOnInit(): void {
    // nên viết các phần này trong OnInit
    this.formSignUp = this.fb.group({
        email:['',[Validators.email, gmailValidator]],
        password:'',
        subject: this.fb.group({
          NodeJS: true,
          Angular: false,
          ReactJS: true
        })
      });
}

  getValueSubmit() {
    console.log(this.formSignUp.value);
  }
}


function gmailValidator(formControl: FormControl){
    if(formControl.value.includes('@gmail.com')){
        return null;
    }
    return {gmail: true}
}