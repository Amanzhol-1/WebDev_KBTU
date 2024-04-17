// src/app/services/company.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8000/api/companies/'; 

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}${id}/`);
  }

  createCompany(companyData: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, companyData);
  }

  updateCompany(id: number, companyData: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}${id}/`, companyData);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}