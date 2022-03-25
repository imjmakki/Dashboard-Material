import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    {user: '07502078246', name: 'Mj', surname: 'Al-Anbaki', gender: 'Male'},
    {user: '07802263519', name: 'Mohamad', surname: 'Makki', gender: 'Male'},
  ];

  constructor() { }

  getUser() {
    return this.listUsers.slice();
  }
}
