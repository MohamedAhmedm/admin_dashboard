import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  status:boolean
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079,status:true },
  { position: 2, name: 'Helium', weight: 4.0026,status:true },
  { position: 3, name: 'Lithium', weight: 6.941,status:true },
  { position: 4, name: 'Beryllium', weight: 9.0122,status:true },
  { position: 5, name: 'Boron', weight: 10.811,status:true },
  { position: 6, name: 'Carbon', weight: 12.0107,status:true },
  { position: 7, name: 'Nitrogen', weight: 14.0067,status:true },
  { position: 8, name: 'Oxygen', weight: 15.9994,status:true },
  { position: 9, name: 'Fluorine', weight: 18.9984 ,status:true},
  { position: 10, name: 'Neon', weight: 20.1797,status:true },
];
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['position', 'name', 'weight','status'];
  dataSource = ELEMENT_DATA;
}
