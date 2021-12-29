from typing import Text
from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired

class UpdateReview(FlaskForm):
    content = TextAreaField('content', validators=[DataRequired()])
