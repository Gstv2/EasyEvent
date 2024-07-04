from flask import jsonify
from flask import Flask, render_template, flash, request, redirect, url_for, session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.inspection import inspect
from functools import wraps
from urllib.parse import quote_plus
import os

# Resto do código sem importações circulares
app = Flask(__name__)
app.static_folder = 'static'

# Rota para a página inicial
@app.route('/')
def index():
    return redirect('/home')

# Rota para a página inicial (home)
@app.route('/home')
def home():
    return render_template("site/home.html")

@app.route('/login')
def login():
    return render_template("site/login.html")

@app.route('/eventos')
def eventos():
    return render_template("site/events.html")

@app.route('/teste')
def teste():
    return render_template("site/teste.html")


if __name__ == '__main__':
    app.run(debug=True)


