from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from PIL import Image
from django.http import HttpResponse
from django.conf import settings
import os

from django.urls import reverse_lazy
from django.views.generic import FormView

from shop.forms import UserRegisterForm


# Create your views here.
def index(request):
    return render(request, "indexv2.html")

def base(request):
    return render(request, "base.html")
def login(request):
    return render(request, "registration/login.html")
def contact(request):
    return render(request, "contact.html")
@login_required
def profile(request):
    return render(request, "prtest12.html")

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
    template_name = "registration/register.html"
    success_url = reverse_lazy('index')
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)