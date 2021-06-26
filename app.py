from flask import Flask

from components.footer.footer import footer
from components.side_navigation_bar.side_navigation_bar import side_navigation_bar
from components.top_navigation_bar.top_navigation_bar import top_navigation_bar
from pages.shopping_cart.shopping_cart import shopping_cart
from pages.shop.shop import shop
from pages.registration.registration import registration
from pages.questions.questions import questions
from pages.policy.policy import policy
from pages.paying.paying import paying
from pages.order.order import order
from pages.cooking_class_registration.cooking_class_registration import cooking_class_registration
from pages.cook_with_carlos.cook_with_carlos import cook_with_carlos
from pages.contact.contact import contact
from pages.carlos_story.carlos_story import carlos_story
from pages.home.home import home
from flask_session import Session

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

app.register_blueprint(top_navigation_bar)
app.register_blueprint(side_navigation_bar)
app.register_blueprint(footer)

###### Pages
## Home

app.register_blueprint(home)

## Carlos story

app.register_blueprint(carlos_story)

## Contact

app.register_blueprint(contact)

## Cook with carlos

app.register_blueprint(cook_with_carlos)

## Cooking class registration

app.register_blueprint(cooking_class_registration)

## Order

app.register_blueprint(order)

## Paying

app.register_blueprint(paying)

## Policy

app.register_blueprint(policy)

## Questions

app.register_blueprint(questions)

## Registration

app.register_blueprint(registration)

## Shop

app.register_blueprint(shop)

## Shopping cart

app.register_blueprint(shopping_cart)
