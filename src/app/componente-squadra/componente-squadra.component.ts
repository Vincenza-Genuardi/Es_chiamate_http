import { Component, Input } from '@angular/core';
import { Team } from '../models/componente-squadra.model';

@Component({
  selector: 'app-componente-squadra',
  templateUrl: './componente-squadra.component.html',
  styleUrls: ['./componente-squadra.component.css']
})
export class ComponenteSquadraComponent {
@Input() team !: Team

}
