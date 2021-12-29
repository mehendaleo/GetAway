from flask import Blueprint, request
from flask_login import login_required
from app.models import Review, db
from app.forms import CreateReview

review_routes = Blueprint('reviews', __name__)

# all reviews for specific location
@review_routes.route('/location/<int:location_id>')
# @login_required
def reviews(location_id):
    query_reviews = Review.query.filter(Review.location_id == location_id).all()
    reviews = [review.to_dict() for review in query_reviews]
    return {'reviews': reviews}

# create a review
@review_routes.route('/location/create', methods=['POST'])
# @login_required
def create_review():
    form = CreateReview()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id = form.data['user_id'],
            location_id = form.data['location_id'],
            content = form.data['content']
        )

        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        return 'bad data'

