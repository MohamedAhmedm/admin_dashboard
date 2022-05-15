import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AddPermissionComponent } from './components/add-permission/add-permission.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApprovedOrdersComponent } from './components/approved-orders/approved-orders.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { SendOrderComponent } from './components/send-order/send-order.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'addEmployee',
        component: AddEmployeeComponent,
      },
      {
        path: 'addGroup',
        component: AddGroupComponent,
      },
      {
        path: 'addPermission',
        component: AddPermissionComponent,
      },
      {
        path: 'allOrders',
        component: AllOrdersComponent,
      },
      {
        path: 'approvedOrders',
        component: ApprovedOrdersComponent,
      },
      {
        path: 'sendOrder',
        component: SendOrderComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,

    AddPermissionComponent,
    AddGroupComponent,
    AddEmployeeComponent,
    HeaderComponent,
    AllOrdersComponent,
    ApprovedOrdersComponent,
    SendOrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
