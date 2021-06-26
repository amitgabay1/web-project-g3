from flask import Blueprint, render_template, request

# contact blueprint definition
from utilities.db.contact import ContactUs

contact = Blueprint('contact', __name__, static_folder='static', static_url_path='/contact', template_folder='templates')


# Routes
@contact.route('/contact', methods=["GET", "POST"])
def index():
    message_sent = False
    if request.method == 'POST':
        client_message = request.json['message']
        ContactUs.insert_message(client_message)
        message_sent = True
    return render_template('contact.html', message_sent=message_sent)
