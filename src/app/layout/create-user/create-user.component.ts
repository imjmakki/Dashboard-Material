import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  gender: any[] = ['Male', 'Female'];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
