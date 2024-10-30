import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //four types of datatype-- string, number, boolean, date

  courseName: string = "Angular 18";

  // direct variable datatype assigning
  inputType = "checkbox";

  myClassName: string = "text-red";

  rollNo: number = 123;

  isLogged: boolean = false;

  currentDate: Date = new Date();

  constructor(){
   
  }
}
