import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../layout/dashboard/dashboard.component";
import {MainComponent} from "../../layout/main/main.component";
import {UserComponent} from "../../layout/user/user.component";
import {ReportComponent} from "../../layout/report/report.component";
import {CreateUserComponent} from "../../layout/create-user/create-user.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: '', component: MainComponent },
      { path: 'users', component: UserComponent },
      { path: 'reports', component: ReportComponent },
      { path: 'add', component: CreateUserComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
