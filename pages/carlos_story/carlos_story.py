from flask import Blueprint, render_template

# carlos story blueprint definition
carlos_story = Blueprint('carlos_story', __name__, static_folder='static', static_url_path='/carlos_story', template_folder='templates')


# Routes
@carlos_story.route('/carlos_story')
def index():
    return render_template('carlos_story.html')
