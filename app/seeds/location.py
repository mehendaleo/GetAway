from app.models import db, Location

def seed_locations():
    location1 = Location(
        user_id = 1,
        city = 'Tampa',
        state = 'Florida',
        country = 'United States',
        name = 'Cozy AF Tiny-House Oasis',
        amenities = '2 guests, 1 bedroom, 1 bed, 1 bath',
        description = 'Awarded a *Unique Stay* by, we welcome you to stay at this Rustic Tiny-House which use to be an old storage container that traveled the world. \
            This now cottage has so much unique and fun details awaiting to be discovered.',
        price = '161'
    )
    location2 = Location(
        user_id = 1,
        city = 'Miami Beach',
        state = 'Florida',
        country = 'United States',
        name = 'Fontainebleau Deluxe Junior Suite - Garden View',
        amenities = '4 guests, Studio, 2 beds, 1 bath',
        description = 'This is one of the deluxe junior suites in the luxurious Fontainebleau Hotel with access to hotel amenities. The suite is located in the newly \
            renovated all-condo Sorrento Tower and is 30 percent bigger than other standard junior suites.',
        price = '212'
    )
    location3 = Location(
        user_id = 1,
        city = 'Charlotte',
        state = 'North Carolina',
        country = 'United States',
        name = 'Uptown Charlotte Sky Rise overlooking the city!',
        amenities = '6 guests, 1 bedroom, 1 bed, 1 bath',
        description = 'Your family will be close to everything when you stay at this centrally-located place. Bars in walking distance and a thriving night life.',
        price = '83'
    )
    location4 = Location(
        user_id = 1,
        city = 'Charleston',
        state = 'South Carolina',
        country = 'United States',
        name = 'KING ST DISTRICT - Walk Everywhere!',
        amenities = '5 guests, 2 bedrooms, 2 beds, 1 bath',
        description = 'Two bedroom condo/townhome comfortable for a place to stay away from home. Close to downtown Charleston and the beautiful beaches. Less than 5 miles \
            to MUSC. Less than 7 miles to the pier on Folly Beach.',
        price = '213'
    )
    location5 = Location(
        user_id = 2,
        city = 'Tampa',
        state = 'Florida',
        country = 'United States',
        name = 'Condo with Sea views & Heated Pool',
        amenities = '4 guests, 1 bedroom, 2 beds, 1 bath',
        description = 'Step into the comfort of this beautiful 1-bedroon apartment, with outstanding facilities in Tampa. The property is situated ideally nearby the \
            beach so you can enjoy the best views over the Sea within Tampa Bay area.',
        price = '85'
    )
    location6 = Location(
        user_id = 2,
        city = 'Miami Beach',
        state = 'Florida',
        country = 'United States',
        name = 'COSY STUDIO IN BOUTIQUE HOTEL MIAMI BEACH',
        amenities = '2 guests, Studio, 1 bed, 1 bath',
        description = 'LOCATED IN THE HEART OF MIAMIBEACH THE NEW HOTEL HAS A PERFECT GEOGRAPHICAL SITUATION AT TWO MINUTES FROM THE BEACH OF THE PARK OF THE CONCERT PLACE, \
            BOUTIQUES OR SOME OF THE FAMOUS MALL OF BAL HARBOR…',
        price = '99'
    )
    location7 = Location(
        user_id = 2,
        city = 'Charlotte',
        state = 'North Carolina',
        country = 'United States',
        name = 'Stylish & Modern | High Rise Lux | Stunning Views',
        amenities = '3 guests, 1 bedroom, 1 bed, 1 bath',
        description = 'Our studio apartment w/ 1 queen bed, couch & air mattress has everything you need to enjoy your stay in a prime location! \
            The apartment is new and offers a modern kitchen w/ granite countertops, natural hardwood flooring, floor-to-ceiling windows, 9\' \
            ceilings and stainless steel appliances. Enjoy coffee from our Keurig. Arguably one of the best views in the city. Absolute luxury!',
        price = '92'
    )
    location8 = Location(
        user_id = 2,
        city = 'Charleston',
        state = 'South Carolina',
        country = 'United States',
        name = 'Serene Cottage with Beautiful Garden and Heated Pool',
        amenities = '4 guests, 1 bedroom, 1 bed, 1.5 baths',
        description = 'This unique inviting light filled space boasts beautiful french doors throughout with an unmatched view into the lush courtyard. \
            Plus 1 off-street parking spot!',
        price = '269'
    )
    location9 = Location(
        user_id = 3,
        city = 'Tampa',
        state = 'Florida',
        country = 'United States',
        name = 'Tampa Bay Breeze -sunset views over crystal waters',
        amenities = '4 guests, 1 bedroom, 2 beds, 1 bath',
        description = 'Tropical Paradise is only minutes away! Tampa\'s only all-waterfront, all-suite resort is perfectly \
            positioned for those traveling for business or simply to relax.',
        price = '154'
    )
    location10 = Location(
        user_id = 3,
        city = 'Miami Beach',
        state = 'Florida',
        country = 'United States',
        name = 'OCEANFRONT, BALCONY, WIFI, PARKING',
        amenities = '3 guests, Studio, 2 beds, 1 bath',
        description = 'Come and spend your vacation in Miami in an idyllic setting. Your accommodation is located on the seafront \
            with a lovely, equipped terrace . In the morning, go for a walk on the beach and enjoy the ocean. In addition, your property \
            is part of a luxury condo 50s, recently renovated, and offering a wide range of facilities such as swimming pool, sauna, garden, restaurants and a gym.',
        price = '109'
    )
    location11 = Location(
        user_id = 3,
        city = 'Charlotte',
        state = 'North Carolina',
        country = 'United States',
        name = 'Serene *Walkable *Trendy Plaza Midwood near Uptown',
        amenities = '5 guests, 2 bedrooms, 2 beds, 1 bath',
        description = 'Experience walkable urban amenities and full-house privacy with free off-street parking in the heart of Charlotte\'s \
            trendy & historic Plaza Midwood neighborhood. Enjoy a leisurely walk to dining and entertainment, coffee or wine by the impressive \
            stone fireplace or simply enjoy the gentle call of the native barred owl from the cozy comfort of the home\'s revered screened porch.',
        price = '245'
    )
    location12 = Location(
        user_id = 3,
        city = 'Charleston',
        state = 'South Carolina',
        country = 'United States',
        name = 'Waterfront Privacy, heated infinity pool, location',
        amenities = '8 guests, 4 bedrooms, 4 beds, 3 baths',
        description = 'Be prepared for a truly eye opening experience of this one of a kind Lowcountry experience. Booking this home will change \
            the way you view your next vacation-literally! Every detail in this home has been laid out for you to arrive and immediately go into \
            relaxation mode. There are amenities included for the adventurous outdoor lover and the unrivaled night life scene Charleston proudly \
            boasts. This home is centrally located to Folly Beach and Downtown Charleston.',
        price = '993'
    )
    location13 = Location(
        user_id = 4,
        city = 'Tampa',
        state = 'Florida',
        country = 'United States',
        name = 'Clean, Modern Home minutes from Downtown Tampa',
        amenities = '4 guests, 2 bedrooms, 2 beds, 1 bath',
        description = 'Beautiful, clean home minutes from downtown Tampa. Located in N Hyde Park you are \
            centrally located to many of the best areas of Tampa Bay',
        price = '89'
    )
    location14 = Location(
        user_id = 4,
        city = 'Miami Beach',
        state = 'Florida',
        country = 'United States',
        name = 'Gorgeous Bay View Studio direct beach exit',
        amenities = '4 guests, Studio, 3 beds, 1 bath',
        description = 'My place is over the well-known Collins Avenue and in front of the ocean with immediate \
            access to the beach. Minutes away from many attractions that this city offers during day and night time.. \
            You\'ll love my place because of its incredible views, the amazing beach and the comfy beds!',
        price = '81'
    )
    location15 = Location(
        user_id = 4,
        city = 'Charlotte',
        state = 'North Carolina',
        country = 'United States',
        name = '4-Story Luxury Home w/ Rooftop Hot Tub by Mansion',
        amenities = '8 guests, 3 bedrooms, 4 beds, 3.5 baths',
        description = 'This Mansion property was built in 2019 and reflects the modern, luxury lifestyle within walking \
            distance from the BofA Stadium, Uptown, and more. Complete with full kitchen, dining area, living room with an \
            enormous 82 inch HDTV, 2-car garage, Tesla Charger & rooftop grill+hot tub this townhome is perfect for a visiting \
            executive or family and friends looking to enjoy CLT together!',
        price = '301'
    )
    location16 = Location(
        user_id = 4,
        city = 'Charleston',
        state = 'South Carolina',
        country = 'United States',
        name = '*OUTDOOR OASIS* OAK NEST! Btwn CHARLESTON & BEACH',
        amenities = '2 guests, 1 bedroom, 1 bed, 2.5 baths',
        description = 'GET OUTDOORS! Minutes to Sullivan\'s Island Beach, Shem Creek & Downtown Charleston. The Live Oak Nest \
            is a stunning indulgence we all deserve. COUPLES & honeymooners OASIS. Circular driveway, private parking, bikes, \
            beach essentials, flickering torches, courtyards, fountains, exquisite baths, chefs kitchen, exquisite decor & furnishings.',
        price = '285'
    )
    location17 = Location(
        user_id = 5,
        city = 'Tampa',
        state = 'Florida',
        country = 'United States',
        name = 'Beautiful & Brand New Cottage perfectly located!',
        amenities = '2 guests, 1 bedroom, 1 bed, 1 bath',
        description = 'Enjoy this brand new, fully equipped 1 bedroom, living room, full kitchen, 1 bath, private cottage. \
            Designed to make any length stay comfortable & convenient. It\'s 5 minutes from downtown Tampa & 25 minutes from the beaches.',
        price = '68'
    )
    location18 = Location(
        user_id = 5,
        city = 'Miami Beach',
        state = 'Florida',
        country = 'United States',
        name = 'Oceanfront 14th Floor Brand New Beachfront Flat',
        amenities = '3 guests, 1 bedroom, 2 beds, 1 bath',
        description = 'A modern style and freshly renovated large beachfront studio apartment in Miami Beach with 180 degree ocean \
            views of the crystal clear water and free parking.',
        price = '170'
    )
    location19 = Location(
        user_id = 5,
        city = 'Charlotte',
        state = 'North Carolina',
        country = 'United States',
        name = 'The Carolina Treehouse',
        amenities = '2 guests, 1 bed, 1 bath',
        description = 'We built this place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind. Our hope \
            is that you enjoy every part of your stay at our Carolina Treehouse; from enjoying your morning cup of pour over coffee to selecting \
            your favorite record to play as the sun sets or curl up underneath on our swing bed that overlooks the private pond in this lodge-chic \
            treehouse all while being surrounded by nature.',
        price = '337'
    )
    location20 = Location(
        user_id = 5,
        city = 'Charleston',
        state = 'South Carolina',
        country = 'United States',
        name = 'Roomy & Welcoming Waterfront Charleston House',
        amenities = '12 guests, 5 bedrooms, 8 beds, 5 baths',
        description = 'Spacious coastal home on a large lot with creek access for paddle boarding & kayaking. Lots to do on-site, nearby park and beach, \
            pool table, video games, theater room and swinging daybeds to watch one-of-a-kind sunsets.',
        price = '476'
    )

    db.session.add(location1)
    db.session.add(location2)
    db.session.add(location3)
    db.session.add(location4)
    db.session.add(location5)
    db.session.add(location6)
    db.session.add(location7)
    db.session.add(location8)
    db.session.add(location9)
    db.session.add(location10)
    db.session.add(location11)
    db.session.add(location12)
    db.session.add(location13)
    db.session.add(location14)
    db.session.add(location15)
    db.session.add(location16)
    db.session.add(location17)
    db.session.add(location18)
    db.session.add(location19)
    db.session.add(location20)

    db.session.commit()


def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()
