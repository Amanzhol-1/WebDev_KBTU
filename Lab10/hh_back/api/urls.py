from django.urls import path
from .views import CompanyList, CompanyDetail, VacancyList, VacancyDetail, CompanyVacancyList, TopTenVacanciesList
from .views import company_list, company_detail, create_company, company_update, company_delete, vacancy_list, create_vacancy, vacancy_detail, vacancy_update, vacancy_delete

urlpatterns = [
    # path('companies/', CompanyList.as_view(), name='company-list'),
    # path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    # path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    # path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacancyList.as_view(), name='company-vacancies'),
    path('vacancies/top_ten/', TopTenVacanciesList.as_view(), name='top-ten-vacancies'),

    path('companies/', company_list, name='company-list'),
    path('companies/create/', create_company, name='company-create'),
    path('companies/<int:pk>/', company_detail, name='company-detail'),
    path('companies/<int:pk>/update/', company_update, name='company-update'),
    path('companies/<int:pk>/delete/', company_delete, name='company-delete'),

    path('vacancies/', vacancy_list, name='vacancy-list'),
    path('vacancies/create/', create_vacancy, name='vacancy-create'),
    path('vacancies/<int:pk>/', vacancy_detail, name='vacancy-detail'),
    path('vacancies/<int:pk>/update/', vacancy_update, name='vacancy-update'),
    path('vacancies/<int:pk>/delete/', vacancy_delete, name='vacancy-delete'),
]

#http://localhost:8000/api/companies/
#http://localhost:8000/api/companies/<id>/
#http://localhost:8000/api/companies/<id>/vacancies/
#http://localhost:8000/api/vacancies/
#http://localhost:8000/api/vacancies/<id>/
#http://localhost:8000/api/companies/<company_id>/vacancies/
#http://localhost:8000/api/vacancies/top_ten/
