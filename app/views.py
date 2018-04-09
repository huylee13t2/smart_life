from django.shortcuts import render
from django.contrib.auth.models import User
import jwt, json, qrcode
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from .models import Account, Product, Product_Infomation, Company
import os, random
from django.utils import timezone
from django.conf import settings

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    try:
        user = User.objects.get(username = username)
        if user.is_active & user.is_staff & user.is_superuser :
            is_admin = True
        else:
            is_admin = False

        try:
            account = Account.objects.get(user__username = username)
        except:
            encode = jwt.encode({'username': username}, 'secret')
            account = Account(user = user, token=str(encode))
            account.save()

        if user.check_password(password):
            response = {
                'result' : user.id,
                'data' : {
                    'token' : account.token,
                    'is_admin' : is_admin
                }
            }
        else:
            response = {
                'result' : 0
            }
    except:
        response = {
            'result' : -999
        }

    return JsonResponse(response)

@csrf_exempt
def product_create(request):
    name = request.POST['name']
    code = request.POST['code']
    token = request.POST['token']

    try:
        account = Account.objects.get(token = token)

        qr = qrcode.QRCode(
            version = 1,
            error_correction = qrcode.constants.ERROR_CORRECT_H,
            box_size = 10,
            border = 4,
        )

        qr.add_data(code)
        qr.make(fit=True)
        file_name = 'qr_code_' + str(random.randint(100000000000000, 9999999999999999999))+'.png'
        img = qr.make_image()
        full_file_name = './static/media/'+ file_name
        img.save(full_file_name)

        product = Product(ma_san_pham = code, qr_code = './static/media/'+file_name, qr_code_name=file_name, ten_san_pham = name, created = account.user, updated=account.user)
        product.save()

        response = {
            'result' : product.id,
        }
    except:
        response = {
            'result' : -999
        }

    return JsonResponse(response)

def product_list(request):
    # token = request.POST['token']

    # account = Account.objects.get(token = token)

    products = Product.objects.all()

    arr = []
    for i in products:
        arr.append({
            'ma_san_pham' : i.ma_san_pham,
            'qr_code' : i.qr_code.name,
            'qr_code_name' : i.qr_code_name,
            'ten_san_pham' : i.ten_san_pham
        })
    
    response = {
        'result' : 1,
        'data' : arr
    }

    return JsonResponse(response)

def product_detail(request):
    ma_san_pham = request.GET['ma_san_pham']
    print(ma_san_pham)

    try:
        product = Product.objects.get(ma_san_pham = ma_san_pham)

        response = {
            'result' : product.id,
            'data' : {
                'id' : product.id,
                'ma_san_pham' : product.ma_san_pham,
                'qr_code' : product.qr_code.name,
                'qr_code_name' : product.qr_code_name,
                'ten_san_pham' : product.ten_san_pham
            }
        }
    except Exception as e :
        print(e)
        response = {
            'result' : -999,
            'status' : e
        }
    
    return JsonResponse(response)