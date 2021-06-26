from flask import Blueprint

# side navigation bar blueprint definition
side_navigation_bar = Blueprint('side_navigation_bar', __name__, static_folder='static', static_url_path='/side_navigation_bar', template_folder='templates')
