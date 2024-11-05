import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = 'bg-yellow-300';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  studentList: any[] = [
    { id: 12, name:'AAA', totalMarks: 23, isActive: false, city:'Pune', gender: 'female' },
    { id: 22, name:'BBB', totalMarks: 53, isActive: false, city:'Mumbai', gender: 'female' },
    { id: 32, name:'CCC', totalMarks: 67, isActive: true, city:'Jalgao', gender: 'male' },
    { id: 43, name:'DDD', totalMarks: 98, isActive: false, city:'Nagpur', gender: 'male' },
    { id: 54, name:'EEE', totalMarks: 50, isActive: true, city:'Thane', gender: 'male' },
  ]

  addRedClass(){
    this.div1BgColor = 'bg-red-500';
  }

  addBlueClass(){
    this.div1BgColor = 'bg-blue-500';
  }

  toggleDiv2Class(){
    this.isDiv2Active = !this.isDiv2Active;
  }
  
}
