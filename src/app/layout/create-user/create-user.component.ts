import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  gender: any[] = ['Male', 'Female'];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
