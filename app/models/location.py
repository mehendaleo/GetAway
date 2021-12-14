from .db import db

class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    amenities = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.String(30), nullable=False)


    def to_dict(self):
        return {
            'user_id': self.user_id,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'name': self.name,
            'amenities': self.amenities,
            'description': self.description,
            'price': self.price
        }
