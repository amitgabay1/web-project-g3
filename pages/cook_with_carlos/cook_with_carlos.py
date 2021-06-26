from flask import Blueprint, render_template

# cook with carlos blueprint definition
cook_with_carlos = Blueprint('cook_with_carlos', __name__, static_folder='static', static_url_path='/cook_with_carlos', template_folder='templates')


# Routes
@cook_with_carlos.route('/cook_with_carlos')
def index():
    return render_template('cook_with_carlos.html')
