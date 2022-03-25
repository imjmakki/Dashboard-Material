import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
  }

}
