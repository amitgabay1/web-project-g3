from flask import Blueprint, render_template, redirect, url_for, session, request

# shop page blueprint definition
from utilities.db.products import Products

shop = Blueprint('shop', __name__, static_folder='static', static_url_path='/shop', template_folder='templates')


# Routes
@shop.route('/shop', methods=['GET', 'POST'])
def index():
    if not session.get("cart"):
        session["cart"] = {}
    products = Products.get_all_products()
    if request.method == "POST":
        session["cart"][request.json["productId"]] = int(request.json["quantity"])
    return render_template('shop.html', products=products, shopping_cart=session.get("cart"))
