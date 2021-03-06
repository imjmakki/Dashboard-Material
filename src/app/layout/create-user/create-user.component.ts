import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  gender: any[] = ['Male', 'Female'];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _userService: UserService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addUser() {
    const user: User = {
      user: this.form.value.user,
      name: this.form.value.name,
      surname: this.form.value.surname,
      gender: this.form.value.gender,
    }
    this._userService.addUser(user);
    this.router.navigate(['/dashboard/users']);

    this._snackBar.open('The user has been added successfully', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
