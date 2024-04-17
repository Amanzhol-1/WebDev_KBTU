import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { VacanciesListComponent } from './vacancies-list/vacancies-list.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesListComponent },
  { path: 'vacancies', component: VacanciesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
