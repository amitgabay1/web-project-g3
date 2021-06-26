from flask import Blueprint, render_template, redirect, request, session

# registration page blueprint definition
from utilities.db.users import Users

registration = Blueprint('registration', __name__, static_folder='static', static_url_path='/registration', template_folder='templates')


# Routes
@registration.route('/registration')
def index():
    if session.get('is_logged_in'):
        return render_template('settings.html')
    return render_template('registration.html')


@registration.route('/sign_in', methods=["POST"])
def sign_in():
    email = request.json["email"]
    password = request.json["password"]
    result = Users.get_user(email)
    if not result:
        return f"The mail {email} not exists. Try register instead/", 400
    elif result[0].password == password:
        session["user_id"] = result[0].id
        session["email"] = result[0].email
        session["full_name"] = result[0].full_name
        session["is_logged_in"] = True
        return render_template('settings.html')
    else:
        return "Incorrect password. Try again.", 400


@registration.route('/sign_up', methods=["POST"])
def sign_up():
    email = request.json["email"]
    username = request.json["username"]
    password = request.json["password"]
    result = Users.get_user(email)
    if result and len(result) >= 1:
        return f"Carlos already remember this mail. Try to log in instead :)", 400
    else:
        if Users.insert_user(email, username, password) > 0:
            return sign_in()
        else:
            return "Registration failed. Please try again.", 400


@registration.route('/sign_out', methods=["POST"])
def sign_out():
    session["email"] = ''
    session["full_name"] = ''
    session["is_logged_in"] = False
    return redirect('/home')


@registration.route('/change_password', methods=["POST", "GET"])
def change_password():
    if not session.get('is_logged_in'):
        return "User need to login before changing password", 400
    if request.method == "POST":
        if not request.json:
            return
        old_pass = request.json.get("old_password")
        new_pass = request.json.get("new_password")
        email = session['email']
        user = Users.get_user(email)
        if not user:
            return f"User not found", 400
        elif user[0].password == old_pass:
            Users.update_password(user[0].id, new_pass)
            return redirect('/home')
        else:
            return "Incorrect old password. Try again.", 400

    return render_template('settings.html', change_password_mode=session["is_logged_in"])


@registration.route('/delete_account', methods=["POST"])
def delete_account():
    if not session.get('is_logged_in'):
        return "User need to login before deleting account", 400
    email = session['email']
    Users.delete_user(email)
    return sign_out
