from django.shortcuts import render
from django.http import HttpResponse

#aca estan todos los end points de la api
#por ejemplo / blabla todo lo que va detras de /
# Create your views here.
def main (request):
   return HttpResponse("<h1>Hello, world. You're at the polls index.<h1>")


    