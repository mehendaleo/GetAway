from crypt import methods
from flask import Blueprint, request
from flask_login import login_required
from app.api.auth_routes import login
from app.models import Location, Image, booking, db, Booking
from app.forms import LocationForm, UpdateLocationForm, BookingForm
from datetime import datetime
# from operator import or_
# from sqlalchemy import or_

booking_routes = Blueprint('bookings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# scheduled bookings for specific location
@booking_routes.route('/<int:location_id>')
# @login_required
def location_bookings(location_id):
    bookings = Booking.query.filter(Booking.location_id == location_id).all()
    return {
        'bookings': {booking.to_dict()['id']: booking.to_dict() for booking in bookings}
    }


# scheduled bookings for specific user
@booking_routes.route('/users/<int:user_id>')
# @login_required
def user_bookings(user_id):
    bookings = Booking.query.filter(Booking.user_id == user_id).all()
    return {
        'bookings': {booking.to_dict() for booking in bookings}
    }


# new booking
@booking_routes.route('/', methods=['POST'])
# @login_required
def new_booking():
    form = BookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('---------------outside')
    if form.validate_on_submit():
        print('------------------ inside')
        start_date = datetime.strptime(form.data['start_date'], '%Y-%m-%dT%H:%M:%S.%fZ')
        end_date = datetime.strptime(form.data['end_date'], '%Y-%m-%dT%H:%M:%S.%fZ')
        booking = Booking(
            user_id = form.data['user_id'],
            location_id = form.data['location_id'],
            start_date = start_date,
            end_date = end_date,
            guests = form.data['guests'],
        )
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()
    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# delete booking
@booking_routes.route('/<int:booking_id>', methods=['DELETE'])
# @login_required
def delete_booking(booking_id):
    booking = Booking.query.get(booking_id)
    if booking:
        db.session.delete(booking)
        db.session.commit()
        return 'Deleted booking'
    else:
        return 'Ya messed up'
