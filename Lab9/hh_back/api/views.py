from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyList(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyList(ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class CompanyVacancyList(ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Vacancy.objects.filter(company_id=company_id)

class TopTenVacanciesList(ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary')[:10]
    serializer_class = VacancySerializer
