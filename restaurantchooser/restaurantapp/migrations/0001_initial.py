# Generated by Django 4.2.6 on 2023-10-20 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField()),
                ('type1', models.CharField()),
                ('type2', models.CharField()),
                ('cost', models.CharField()),
            ],
        ),
    ]
