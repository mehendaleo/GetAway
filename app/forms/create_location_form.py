from flask_wtf import FlaskForm
from flask_wtf.recaptcha import validators
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class CreateLocationForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    amenities = StringField('amenities', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    price = StringField('price', validators=[DataRequired()])
    image_url1 = StringField('image_url1', validators=[DataRequired()])
    image_url2 = StringField('image_url2', validators=[DataRequired()])
    image_url3 = StringField('image_url3', validators=[DataRequired()])
