from .db import db

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    date = db.Column(db.DateTime, nullable=False)

    user = db.relationship('User', back_populates='booking')
    location = db.relationship('Location', back_populates='booking')
