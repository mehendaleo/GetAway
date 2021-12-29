from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateLocationForm(FlaskForm):
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    amenities = StringField('amenities', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    price = StringField('price', validators=[DataRequired()])
