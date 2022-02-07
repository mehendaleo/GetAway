from .db import db
from sqlalchemy import UniqueConstraint

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    guests = db.Column(db.Integer, nullable=False)


    user = db.relationship('User', back_populates='booking')
    location = db.relationship('Location', back_populates='booking')

    __table_args__ = (
        UniqueConstraint(
            'user_id',
            'location_id',
            'start_date',
            'end_date',
            name='booking_date'
        ),
    )

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_dict(),
            'location': self.location.to_dict(),
            'start_date': self.start_date,
            'end_date': self.end_date,
            'guests': self.guests
        }
