// src/app/vacancies-list/vacancies-list.component.ts

import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy.model';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe(
      (data: Vacancy[]) => {
        this.vacancies = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
