# Generated by Django 5.0.6 on 2024-05-10 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('waste_management', '0002_alter_secondarytransferstation_area'),
    ]

    operations = [
        migrations.AddField(
            model_name='secondarytransferstation',
            name='fine_for_compensation',
            field=models.DecimalField(decimal_places=2, default=500, max_digits=10),
        ),
    ]
