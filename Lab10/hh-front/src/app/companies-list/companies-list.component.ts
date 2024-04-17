// src/app/companies-list/companies-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      (data: Company[]) => {
        this.companies = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
