# Generated by Django 5.0.6 on 2024-05-10 09:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contractor', '0002_alter_thirdpartycontractor_designated_sts'),
        ('waste_management', '0002_alter_secondarytransferstation_area'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee_id', models.CharField(max_length=20, unique=True)),
                ('full_name', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField()),
                ('date_of_hire', models.DateField()),
                ('job_title', models.CharField(max_length=100)),
                ('payment_rate_per_hour', models.DecimalField(decimal_places=2, max_digits=10)),
                ('contact_information', models.CharField(max_length=100)),
                ('assigned_collection_route', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='LoggedWorkingHours',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login_time', models.DateTimeField()),
                ('logout_time', models.DateTimeField()),
                ('total_hours_worked', models.DecimalField(decimal_places=2, max_digits=5)),
                ('overtime_hours', models.DecimalField(decimal_places=2, max_digits=5)),
                ('absences_and_leaves', models.IntegerField(default=0)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contractor.employee')),
            ],
        ),
        migrations.CreateModel(
            name='WasteCollection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_of_collection', models.DateTimeField()),
                ('waste_amount_kg', models.DecimalField(decimal_places=2, max_digits=10)),
                ('waste_type', models.CharField(max_length=100)),
                ('vehicle_used', models.CharField(max_length=100)),
                ('contractor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contractor.thirdpartycontractor')),
                ('designated_sts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='waste_management.secondarytransferstation')),
            ],
        ),
    ]
