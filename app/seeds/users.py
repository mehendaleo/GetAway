from app.models import db, User
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='User',
        email='demo@demolition.io',
        propic_url='https://res.cloudinary.com/duscvhetx/image/upload/v1639673071/Users/Demo_bgcsbd.png',
        password='password'
    )

    user1 = User(
        first_name='Patrik',
        last_name='Laine',
        email=fake.email(),
        propic_url='https://res.cloudinary.com/duscvhetx/image/upload/v1639673071/Users/Laine_fiolnx.png',
        password=fake.password()
    )

    user2 = User(
        first_name='Bernardo',
        last_name='Silva',
        email=fake.email(),
        propic_url='https://res.cloudinary.com/duscvhetx/image/upload/v1639673066/Users/Bernardo_rbhy5d.jpg',
        password=fake.password()
    )

    user3 = User(
        first_name='Joey',
        last_name='Votto',
        email=fake.email(),
        propic_url='https://res.cloudinary.com/duscvhetx/image/upload/v1639673071/Users/Votto_tftxmw.jpg',
        password=fake.password()
    )

    user4 = User(
        first_name='Joe',
        last_name='Burrow',
        email=fake.email(),
        propic_url='https://res.cloudinary.com/duscvhetx/image/upload/v1639673071/Users/Burrow_j0tovi.jpg',
        password=fake.password()
    )

    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
