from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired

class CreateReview(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    location_id = IntegerField('location_id', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
