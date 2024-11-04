import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = 'bg-pink-600';

  addRedClass(){
    this.div1BgColor = 'bg-red-500';
  }

  addBlueClass(){
    this.div1BgColor = 'bg-blue-500';
  }
}
