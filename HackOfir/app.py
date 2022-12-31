import os
import json
import logging
from flask import Flask, render_template

app = Flask(__name__)
application = app

#config
app.secret_key = '5f352fewqfeEWGDVef3532464365d2f'
app.config['JSON_AS_ASCII'] = False

# initialize app handlers
from views import views
app.register_blueprint(views, url_prefix='/')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500