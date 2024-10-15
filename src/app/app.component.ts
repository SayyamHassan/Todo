import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { TodosComponent} from "./MyComponents/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'my-angular-app';
}
