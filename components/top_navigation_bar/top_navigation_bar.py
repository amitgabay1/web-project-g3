from flask import Blueprint

# top navigation bar blueprint definition
top_navigation_bar = Blueprint('top_navigation_bar', __name__, static_folder='static', static_url_path='/top_navigation_bar', template_folder='templates')
