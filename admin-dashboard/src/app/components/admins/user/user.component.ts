import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userId: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

   //fetch userId from URL

   // First : get url data

  //  this.activatedRoute.paramMap.subscribe(param => {
  //   console.log(param);
  //   this.userId = param.get('userId');
  //  });

  // Second method
   this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

  }

}
