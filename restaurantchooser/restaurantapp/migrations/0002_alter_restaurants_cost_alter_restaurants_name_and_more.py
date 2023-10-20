# Generated by Django 4.2.6 on 2023-10-20 20:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurantapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurants',
            name='cost',
            field=models.BigIntegerField(),
        ),
        migrations.AlterField(
            model_name='restaurants',
            name='name',
            field=models.CharField(max_length=254),
        ),
        migrations.AlterField(
            model_name='restaurants',
            name='type1',
            field=models.CharField(max_length=254),
        ),
        migrations.AlterField(
            model_name='restaurants',
            name='type2',
            field=models.CharField(blank=True, max_length=254),
        ),
    ]