import os
import re
import json
import numpy
import pandas as pd
from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for, abort, session, send_file
from pandas.core.frame import DataFrame
from io import BytesIO
from functools import wraps

#init flask views
views = Blueprint('views', __name__)

@views.route('/')
def home():
    try:
        return render_template("search_employees.html")
    except Exception as e:
        abort(500)

#Error Pages
@views.route("/204", methods=['GET'])
def err204():
    abort(204)

@views.route("/404", methods=['GET'])
def err404():
    abort(404)

@views.route("/500", methods=['GET'])
def err500():
    abort(500)
