from flask import Blueprint, request
from flask_login import login_required
from app.models import Location, Image, db
from app.forms import LocationForm, UpdateLocationForm
from operator import or_
from sqlalchemy import or_

location_routes = Blueprint('locations', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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
        db.session.commit()

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
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# delete single location
@location_routes.route('/<int:location_id>/delete', methods=['DELETE'])
# @login_required
def delete_location(location_id):
    location = Location.query.get(location_id)
    if location:
        db.session.delete(location)
        db.session.commit()
        return location.to_dict()
    else:
        return 'bad data'


# update single location
@location_routes.route('/<int:location_id>/update', methods=['PUT'])
# @login_required
def update_location(location_id):
    form = UpdateLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        location = Location.query.get(location_id)

        location.city = form.data['city']
        location.state = form.data['state']
        location.country = form.data['country']
        location.name = form.data['name']
        location.amenities = form.data['amenities']
        location.description = form.data['description']
        location.price = form.data['price']

        db.session.commit()
        return location.to_dict()
    else:
        return "bad data"

# location search route
@location_routes.route('/<string:search>', methods=['GET'])
# @login_required
def location_search(search):
    locations = Location.query.filter(
        or_(
            Location.city.ilike(f"%{search}%"),
            Location.state.ilike(f"%{search}%"),
            Location.country.ilike(f"%{search}%")
        )
    ).all()
    return {'locations': [location.to_dict_search() for location in locations]}
