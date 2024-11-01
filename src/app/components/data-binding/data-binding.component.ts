import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //four types of datatype-- string, number, boolean, date

  courseName: string = "Angular 18";
  stateName: string = "Uttar Pradesh";
  // direct variable datatype assigning
  inputType = "checkbox";
  myClassName: string = "text-red-500";
  rollNo: number = 123;
  isLogged: boolean = true;
  currentDate: Date = new Date();

  //signal
  firstName = signal("Chetan Bhagat");

  constructor(){
  }

  changeCourseName() {
    this.courseName = "React JS!";
    //signal
    this.firstName.set("Virat Kohli");
  }

  showAlert(message: string){
    alert(message);
  }

}
