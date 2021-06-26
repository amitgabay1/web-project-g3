from flask import Blueprint, render_template, redirect, url_for, session, request

# shopping cart page blueprint definition
from utilities.db.products import Products

shopping_cart = Blueprint('shopping_cart', __name__, static_folder='static', static_url_path='/shopping_cart', template_folder='templates')


# Routes
@shopping_cart.route('/shopping_cart', methods=["GET", "POST"])
def index():
    if not session.get("is_logged_in"):
        return render_template("registration.html")
    if not session.get("cart"):
        session["cart"] = {}
    cart_product_ids = [int(p_id) for p_id in session["cart"].keys() if session["cart"][p_id] > 0]
    products = Products.get_products_by_ids(cart_product_ids)
    if not products:
        products = []
    if request.method == "POST":
        session["cart"][request.json["productId"]] = int(request.json["quantity"])
    return render_template('shopping_cart.html', products=products, shopping_cart=session.get("cart"))
