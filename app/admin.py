from django.contrib import admin

from app.models import Company, Product, Product_Infomation, Account

admin.site.register(Company)
admin.site.register(Product_Infomation)
admin.site.register(Product)
admin.site.register(Account)