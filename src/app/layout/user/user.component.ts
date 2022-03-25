import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";

const listUsers: User[] = [
  {user: '07502078246', name: 'Mj', surname: 'Al-Anbaki', gender: 'Male'},
  {user: '07802263519', name: 'Mohamad', surname: 'Makki', gender: 'Male'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['user', 'name', 'surname', 'gender', 'action'];
  dataSource = listUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
