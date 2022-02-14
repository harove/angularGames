import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  urlPotter = 'http://hp-api.herokuapp.com/api/characters/house/Gryffindor'

  constructor(private http:HttpClient) { }

  getPotter():Observable<any>{
    return this.http.get(this.urlPotter)
  }
}
