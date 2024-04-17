// src/app/services/vacancy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000/api/vacancies/'; 

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacancyById(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}${id}/`);
  }

  createVacancy(vacancyData: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(this.apiUrl, vacancyData);
  }

  updateVacancy(id: number, vacancyData: Vacancy): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.apiUrl}${id}/`, vacancyData);
  }

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}