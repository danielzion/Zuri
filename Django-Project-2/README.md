python -m venv env
env> .\Scripts\activate
pip install django
django-admin startproject dhanny
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

