from django.urls import path

from . import views

urlpatterns = [
    path('user/login/', views.login, name='login'),
    path('product/create/', views.product_create, name='product_create'),
    path('product/list/', views.product_list, name='product_list'),
    path('product/detail', views.product_detail, name='product_detail'),
]