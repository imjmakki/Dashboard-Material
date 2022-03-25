import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router) {
    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const phone = this.form.value.phone;
    const password = this.form.value.password;

    if(phone == '07502078246' && password == '12345') {
      this.fakeLoading();
    } else {
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Access Denied', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['dashboard'])
    }, 1500);
  }
}
