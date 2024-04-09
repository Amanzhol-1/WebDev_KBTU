from django.urls import path
from .views import CompanyList, CompanyDetail, VacancyList, VacancyDetail, CompanyVacancyList, TopTenVacanciesList

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacancyList.as_view(), name='company-vacancies'),
    path('vacancies/top_ten/', TopTenVacanciesList.as_view(), name='top-ten-vacancies'),
]

#http://localhost:8000/api/companies/
#http://localhost:8000/api/companies/<id>/
#http://localhost:8000/api/companies/<id>/vacancies/
#http://localhost:8000/api/vacancies/
#http://localhost:8000/api/vacancies/<id>/
#http://localhost:8000/api/companies/<company_id>/vacancies/
#http://localhost:8000/api/vacancies/top_ten/
