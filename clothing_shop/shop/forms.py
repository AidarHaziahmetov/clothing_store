from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from shop import models

class UserRegisterForm(UserCreationForm):
    """
    Переопределенная форма регистрации пользователей
    """

    class Meta(UserCreationForm.Meta):
        model = models.User
        fields = UserCreationForm.Meta.fields + ('email',)

