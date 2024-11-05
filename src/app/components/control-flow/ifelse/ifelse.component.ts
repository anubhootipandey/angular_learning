import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  isDiv1Visible: boolean = false;
  isWarningDiv2Visible: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  toggleDiv2(){
    this.isWarningDiv2Visible = !this.isWarningDiv2Visible;
  }

}
