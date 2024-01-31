import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actualite } from '../actualite';


const url="http://localhost:8082"

@Injectable({
  providedIn: 'root'
})

export class ActualiteService {

  constructor(private http:HttpClient) { }

  getActualites(): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(`${url}/actualites`);
  }

  getActualiteById(id: number): Observable<Actualite> {
    return this.http.get<Actualite>(`${url}/actualites/${id}`);
  }

  addActualite(event: Actualite): Observable<Actualite> {
    return this.http.post<Actualite>(`${url}/actualites/addAct`, event);
  }

  updateActualite(id: number, act: Actualite): Observable<Actualite> {
    return this.http.put<Actualite>(`${url}/actualites/${id}`, act);
  }

  deleteActualite(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/actualites/${id}`);
  }

}
