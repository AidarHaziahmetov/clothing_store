import json

from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import F
from django.shortcuts import render, redirect
from PIL import Image
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import os

from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import FormView, ListView, DetailView, DeleteView

from shop.forms import UserRegisterForm
from shop.models import Product, Cart, CartItem


# Create your views here.
def index(request):
    return render(request, "shop/indexv2.html")

def base(request):
    return render(request, "basev2.html")
def login(request):
    return render(request, "registration/login.html")
def contact(request):
    return render(request, "shop/contact.html")
@login_required
def profile(request):
    return render(request, "shop/prtest12.html")

def display_image(request, image_name):
    """Отображает скачанное изображение."""

    try:
        full_image_path = os.path.join(settings.MEDIA_ROOT, image_name)
        image_data = Image.open(full_image_path)
        response: HttpResponse = HttpResponse(content_type="image/jpeg")
        image_data.save(response, format="JPEG")
        return response

    except FileNotFoundError:
        return HttpResponse("Изображение не найдено", status=404)

class RegisterView(FormView):
    form_class = UserRegisterForm
    template_name = "registration/new_register.html"
    success_url = reverse_lazy('index')
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

class ProductListView(ListView):
    model = Product
    template_name = 'shop/product_list.html'
    context_object_name = 'products'

class ProductDetailView(DetailView):
    model = Product
    template_name = 'shop/product_detail.html'
    context_object_name = 'product'

class CartView(LoginRequiredMixin, ListView):
    model = CartItem
    template_name = 'shop/cart.html'
    context_object_name = 'cart_items'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["total_price"] = sum(cart_item.total_price for cart_item in context['cart_items'])
        return context
    def get_queryset(self):
        cart = Cart.objects.get_or_create(user=self.request.user)[0]
        return cart.cart_items.all().annotate(total_price=F('product__price')*F('quantity'))
class AddToCartView(LoginRequiredMixin, DetailView):
    model = Product
    template_name = 'shop/product_detail.html'

    def get(self, request, *args, **kwargs):
        product = self.get_object()
        cart, created = Cart.objects.get_or_create(user=request.user)
        try:
            cart_item = cart.cart_items.get(product=product)
            cart_item.quantity += 1
            cart_item.save()
        except CartItem.DoesNotExist:
            cart_item = CartItem.objects.create(cart=cart, product=product)
        return redirect('product_detail', pk=product.pk)

class RemoveFromCartView(LoginRequiredMixin, DeleteView):
    model = CartItem
    template_name = 'shop/cart_confirm_delete.html'
    success_url = reverse_lazy('cart')

    def get_success_url(self):
        return self.success_url


@method_decorator(login_required, name='dispatch')
class UpdateCartQuantityView(View):
    """
    View for updating the quantity of a product in the cart.
    """

    @csrf_exempt
    def post(self, request):
        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            quantity = data.get('quantity')

            if not product_id or not quantity:
                return JsonResponse({'success': False, 'message': 'Некорректные данные'})

            product = Product.objects.get(pk=product_id)
            cart = Cart.objects.get(user=request.user)

            cart_item, created = CartItem.objects.get_or_create(
                cart=cart, product=product
            )

            # Validate quantity (crucial!)
            if quantity < 1 or quantity > product.stock:
                return JsonResponse({
                    'success': False,
                    'message': f"Неверное количество. Доступно {product.stock} шт."
                })

            cart_item.quantity = quantity
            cart_item.save()

            return JsonResponse({'success': True, 'message': 'Количество обновлено'})


        except (Product.DoesNotExist, Cart.DoesNotExist, ValueError):
            return JsonResponse({'success': False, 'message': 'Произошла ошибка'})


def new_login(request):
    return render(request, "registration/new_login.html")