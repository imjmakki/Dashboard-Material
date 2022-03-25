import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../interfaces/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listUsers: User[] = [
    {user: '07502078246', name: 'Mj', surname: 'Al-Anbaki', gender: 'Male'},
    {user: '07802263519', name: 'Mohamad', surname: 'Makki', gender: 'Male'},
  ];

  displayedColumns: string[] = ['user', 'name', 'surname', 'gender', 'action'];
  dataSource = new MatTableDataSource(this.listUsers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
