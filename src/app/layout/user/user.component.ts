import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";

const ELEMENT_DATA: User[] = [
  {user: '07502078246', name: 'Mj', surname: 'Al-Anbaki', gender: 'Male'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['user', 'name', 'surname', 'gender'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
