from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import IntegerField, DateField, DateTimeField, StringField
from wtforms.validators import DataRequired

class BookingForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    location_id = IntegerField('location_id', validators=[DataRequired()])
    start_date = StringField('start_date', validators=[DataRequired()])
    end_date = StringField('end_date', validators=[DataRequired()])
    guests = IntegerField('guests', validators=[DataRequired()])
