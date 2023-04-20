import { Component } from '@angular/core';
import { Team } from './models/componente-squadra.model';
import { ServiceResponse } from './models/serviceResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams!: Team[]
  oServiceResponse !: Observable<ServiceResponse>;
  private serviceURL = 'https://www.balldontlie.io/api/v1/teams/'
  

  constructor(public http: HttpClient) {
  this.makeTypedRequest()
  
  
  }
  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.teams = d.data;});
  }  
  onClick(){
    this.teams = this.teams.sort((a, b) => a.conference.localeCompare(b.conference) || a.division.localeCompare(b.division));
  }
} 


