from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
import os, random
from django.utils import timezone

def content_file_name(instance, filename):
    now = timezone.now()
    x = str(now).replace("-", "").replace(" ", "").replace(":", "").replace("+", "").replace(".", "")
    ext = filename.split('.')[-1]
    name = random.randint(100, 99999)
    filename = "%s%s.%s" % (x, name, ext)
    return os.path.join(filename)

class Company(models.Model):
    ten_cong_ty = models.CharField(max_length=255, blank=True, null=True)
    ma_cong_ty = models.IntegerField(unique=True, default=0)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='company_updated', blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='company_created', blank=True, null=True)
    created = models.DateTimeField(auto_now_add = True, auto_now = False)
    updated = models.DateTimeField(auto_now_add = True, auto_now = False)

    def __str__(self):
        return self.ma_cong_ty

class Product(models.Model):
    ma_san_pham = models.CharField(max_length=255, unique=True, blank=True, null=True)
    ten_san_pham = models.CharField(max_length=255, blank=True, null=True)
    qr_code = models.ImageField(upload_to=content_file_name, null=True)
    qr_code_name = models.CharField(max_length=255, blank=True, null=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_updated', blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_created', blank=True, null=True)
    created = models.DateTimeField(auto_now_add = True, auto_now = False)
    updated = models.DateTimeField(auto_now_add = True, auto_now = False)

    def __str__(self):
        return self.ma_san_pham


class Product_Infomation(models.Model):
    list_type = (
        ('file', 'File'),
        ('text', 'Text')
    )
    name = models.CharField(max_length=255, blank=True, null=True)
    types = models.CharField(max_length=255, choices=list_type, default='text')
    value = models.CharField(max_length=255, blank=True, null=True)
    file = models.FileField(upload_to=content_file_name, blank=True, null=True)
    san_pham = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_info', blank=True, null=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_info_updated', blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_info_created', blank=True, null=True)
    created = models.DateTimeField(auto_now_add = True, auto_now = False)
    updated = models.DateTimeField(auto_now_add = True, auto_now = False)

    def __str__(self):
        return self.name


class Account(models.Model):
    ma_cong_ty = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='account_ma_cong_ty', blank=True, null=True)
    ma_san_pham = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='account_ma_san_pham', blank=True, null=True)
    ma_nguoi_dung = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    token = models.CharField(max_length=255, blank=True, null=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='account_updated', blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='account_created', blank=True, null=True)
    created = models.DateTimeField(auto_now_add = True, auto_now = False)
    updated = models.DateTimeField(auto_now_add = True, auto_now = False)

    def __str__(self):
        return self.user.username