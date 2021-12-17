from flask import Blueprint, request
from flask_login import login_required
from app.models import Location, Image, db, location
from app.forms import LocationForm

location_routes = Blueprint('locations', __name__)


# get all locations for explore
@location_routes.route('/explore')
# @login_required
def locations():
    locations = Location.query.all()
    return {
        'locations': {location.to_dict()['id']: location.to_dict() for location in locations}
    }


# get single location for individual page
@location_routes.route('/<int:location_id>')
# @login_required
def single_location(location_id):
    location = Location.query.get(location_id)
    if location:
        return location.to_dict()
    else:
        return 'Location not found'


# create new location
@location_routes.route('/new', methods=['POST'])
# @login_required
def create_location():
    form = LocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_location = Location(
            user_id = form.data['user_id'],
            city = form.data['city'],
            state = form.data['state'],
            country = form.data['country'],
            name = form.data['name'],
            amenities = form.data['amenities'],
            description = form.data['description'],
            price = form.data['price'],
        )
        db.session.add(new_location)

        image1 = Image(
            image_url = form.data['image_url1'],
            user_id = form.data['user_id'],
            location_id = new_location.id
        )
        image2 = Image(
            image_url = form.data['image_url2'],
            user_id = form.data['user_id'],
            location_id = new_location.id
        )
        image3 = Image(
            image_url = form.data['image_url3'],
            user_id = form.data['user_id'],
            location_id = new_location.id
        )

        db.session.add(image1)
        db.session.add(image2)
        db.session.add(image3)

        db.session.commit()
        return new_location.to_dict()
    else:
        return 'bad data'


# delete single location
@location_routes.route('/<int:location_id>/delete', methods=['DELETE'])
# @login_required
def delete_location(location_id):
    location = Location.query.get(location_id)
    if location:
        db.session.delete(location)
        db.session.commit()
        return 'Successfully deleted'


# update single location
@location_routes.route('/<int:location_id>/update', methods=['PUT'])
# @login_required
def update_location(location_id):
    location = Location.query.get(location_id)
    form = LocationForm()
    if form.validate_on_submit():
            location.city = form.data['city']
            location.state = form.data['state']
            location.country = form.data['country']
            location.name = form.data['name']
            location.amenities = form.data['amenities']
            location.description = form.data['description']
            location.price = form.data['price']

            db.session.commit()
            return location.to_dict()
