from django.db import migrations
from api.user.models import CustomUser

class Migrations(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="kanak", email="kanak@kanak.io", is_staff=True, is_superuser=True, phone="987654321", gender="M",)

    user.set_password("kanak")
    user.save()

    dependencies = []
    operations = [
        migrations.RunPython(seed_data),
    ]
