import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../interfaces/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listUsers: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'surname', 'gender', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.chargeUser();
  }

  chargeUser() {
    this.listUsers = this._userService.getUser();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index: number) {
    console.log(index);
  }
}
