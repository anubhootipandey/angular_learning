import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}
