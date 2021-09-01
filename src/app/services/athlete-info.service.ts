import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Athlete } from '../models/athlete';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AthleteInfoService {

  constructor(private http: HttpClient) { }

  public GetAthleteInfo():Observable<Athlete[]>{

    return this.http.get<Athlete[]>(environment.API)
  }
}
