from app.models import db, User
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='User',
        email='demo@demolition.io',
        propic_url='https://media.discordapp.net/attachments/920737842508988446/920737856476053514/unknown.png',
        password='password'
    )

    user1 = User(
        first_name='Patrik',
        last_name='Laine',
        email=fake.email(),
        propic_url='https://images-ext-2.discordapp.net/external/AOSLNGcZ_1JXYsx84qhjNWpvjeIF45iQaEWfarcuYjU/https/cdn-headshots.theathletic.com/nhl/30003131.png',
        password=fake.password()
    )

    user2 = User(
        first_name='Bernardo',
        last_name='Silva',
        email=fake.email(),
        propic_url='https://images-ext-1.discordapp.net/external/HUqISE9ocGTI9AuLLWjlUoJdW3l05HnboGA_S_1b3g4/https/img.uefa.com/imgml/TP/players/3/2020/324x324/250059115.jpg',
        password=fake.password()
    )

    user3 = User(
        first_name='Joey',
        last_name='Votto',
        email=fake.email(),
        propic_url='https://images-ext-1.discordapp.net/external/6fGPScyk6i5zvyxtgXndsC4KB6AcqSfaT_IpJZZibj8/https/cdn1.thecomeback.com/wp-content/uploads/2017/05/121142495-832x447.jpg',
        password=fake.password()
    )

    user4 = User(
        first_name='Joe',
        last_name='Burrow',
        email=fake.email(),
        propic_url='https://images-ext-2.discordapp.net/external/iXei7VK0tCKtZbhWBIbrqtacvnlW9WpvOjeGx68h0v0/https/profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/01/USATSI_15214405-e1611927000462.jpg?width=1202&height=676',
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
