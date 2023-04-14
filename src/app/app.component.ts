import { Component } from '@angular/core';
import { Team } from './models/componente-squadra.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams!: Team[]
}
