from flask import Blueprint, render_template, redirect, url_for

# order page blueprint definition
order = Blueprint('order', __name__, static_folder='static', static_url_path='/order', template_folder='templates')


# Routes
@order.route('/order')
def index():
    return render_template('order.html')
