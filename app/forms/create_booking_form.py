from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import IntegerField, DateField, DateTimeField
from wtforms.validators import DataRequired

class BookingForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    location_id = IntegerField('location_id', validators=[DataRequired()])
    date = DateTimeField('date', validators=[DataRequired()])
