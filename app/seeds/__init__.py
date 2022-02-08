from flask.cli import AppGroup
from .users import seed_users, undo_users
from .location import seed_locations, undo_locations
from .images import seed_images, undo_images
from .review import seed_reviews, undo_reviews
from .booking import seed_bookings, undo_bookings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_locations()
    seed_images()
    seed_reviews()
    seed_bookings()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_locations()
    undo_images()
    undo_reviews()
    undo_bookings()
    # Add other undo functions here
