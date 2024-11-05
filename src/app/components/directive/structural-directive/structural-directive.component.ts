import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;
  selectedState: string  = "";

  constructor(private router: Router){}  //--->dependency injection

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[] = [
    { id: 12, name:'AAA', city:'Pune', isActive: false },
    { id: 22, name:'BBB', city:'Mumbai', isActive: false },
    { id: 32, name:'CCC', city:'Jalgao', isActive: true },
    { id: 43, name:'DDD', city:'Nagpur', isActive: false },
    { id: 54, name:'EEE', city:'Thane', isActive: false },
  ]

  navigateToAttribute(){
    this.router.navigateByUrl("attribute-dir");
  }

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
    // if(this.isDiv2Visible = false){
    //   this.isDiv2Visible = false;
    // } else{
    //   this.isDiv2Visible = true;
    // }
  }
}
