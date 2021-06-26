from datetime import datetime

from flask import Blueprint, render_template, request, session

# paying page blueprint definition
from utilities.db.orders import Orders
from utilities.db.products import Products
from utilities.db.shopping_cart import ShoppingCart

paying = Blueprint('paying', __name__, static_folder='static', static_url_path='/paying', template_folder='templates')


# Routes
@paying.route('/paying', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        if not session.get("cart"):
            session["cart"] = {}
        session["cart"] = {int(product_id): quantity for product_id, quantity in session.get("cart").items() if
                           quantity > 0}
        products = Products.get_products_by_ids(list(session["cart"].keys()))
        total_price = 0
        for product in products:
            quantity = session["cart"][product.id]
            price = product.price
            total_price += (quantity * price)
        order_id = Orders.insert_order(session["user_id"], total_price, datetime.now())
        for product in products:
            quantity = session["cart"][product.id]
            ShoppingCart.insert_product_order(order_id, product.id, quantity)
        session["cart"] = {}
        return render_template("home.html")
    return render_template('paying.html')
