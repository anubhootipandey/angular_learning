import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[] = [
    { id: 12, name:'AAA', city:'Pune', isActive: false },
    { id: 22, name:'BBB', city:'Mumbai', isActive: false },
    { id: 32, name:'CCC', city:'Jalgao', isActive: true },
    { id: 43, name:'DDD', city:'Nagpur', isActive: false },
    { id: 54, name:'EEE', city:'Thane', isActive: false },
  ]


}
