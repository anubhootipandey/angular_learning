import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, AsyncPipe, DatePipe, JsonPipe, NaPipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "this is a demo session.";
  currentDate: Date = new Date();
  currentTime: Observable<Date> = new Observable<Date>;

  student: any = {
    name: 'Chetan',
    city: 'Pune',
    empId: 323,
    state: ''
  };

  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
