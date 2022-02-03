from app.models import Booking, db
from datetime import date

def seed_bookings():
    booking1 = Booking(
        user_id=1,
        location_id=1,
        start_date=date(2022, 1, 1),
        end_date=date(2022, 1, 6),
        guests=1
    )
    booking2 = Booking(
        user_id=2,
        location_id=2,
        start_date=date(2022, 2, 2),
        end_date=date(2022, 2, 7),
        guests=1
    )
    booking3 = Booking(
        user_id=3,
        location_id=3,
        start_date=date(2023, 3, 3),
        end_date=date(2023, 3, 8),
        guests=1
    )
    booking4 = Booking(
        user_id=4,
        location_id=4,
        start_date=date(2022, 4, 4),
        end_date=date(2022, 4, 9),
        guests=1
    )
    booking5 = Booking(
        user_id=5,
        location_id=5,
        start_date=date(2023, 5, 5),
        end_date=date(2023, 5, 10),
        guests=1
    )

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)
    db.session.add(booking5)

    db.session.commit()

def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()
