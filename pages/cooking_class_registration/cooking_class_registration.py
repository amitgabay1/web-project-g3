from flask import Blueprint, render_template, request

# cooking class registration blueprint definition
from utilities.db.cooking_class import CookingClass

cooking_class_registration = Blueprint('cooking_class_registration', __name__, static_folder='static', static_url_path='/cooking_class_registration', template_folder='templates')


# Routes
@cooking_class_registration.route('/cooking_class_registration', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        first_name = request.json["first_name"]
        last_name = request.json["last_name"]
        email = request.json["email"]
        phone_number = request.json["phone_number"]
        group_size = request.json["group_size"]
        if CookingClass.insert_cooking_class(email, first_name, last_name, phone_number, group_size) == 1:
            return render_template('home.html')
        else:
            return "Failed to register your group to cooking class, please try again", 400
    return render_template('cooking_class_registration.html')
