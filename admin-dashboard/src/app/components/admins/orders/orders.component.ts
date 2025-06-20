import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orders = [
  {
    id: '1001',
    customer: 'Ravi Kumar',
    date: '2025-06-13',
    status: 'Completed',
    amount: 1499
  },
  {
    id: '1002',
    customer: 'Asha Mehta',
    date: '2025-06-12',
    status: 'Pending',
    amount: 999
  },
  {
    id: '1003',
    customer: 'Jatin Arora',
    date: '2025-06-11',
    status: 'Cancelled',
    amount: 299
  }
];

constructor(private activatedRoute: ActivatedRoute){ }


  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe(param =>{
        console.log(param.get('pageNumber'));
        console.log(param.get('size'))
    });

  }


}
