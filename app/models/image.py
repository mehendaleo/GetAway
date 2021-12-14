from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(1000), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'image_url': self.image_url,
            'location_id': self.location_id
        }

    def to_dict_images(self):
        return {'image_url': self.image_url}
