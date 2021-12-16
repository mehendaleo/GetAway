from app.models import Review, db
from faker import Faker
from random import randint

fake = Faker()

def seed_reviews():
    reviews = []
    for i in range(120):
        review = Review(
            user_id = randint(1,5),
            location_id = randint(1,20),
            content = fake.sentence()
        )
        reviews.append(review)

    for review in reviews:
        db.session.add(review)

    db.session.commit()



def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
