## Summary
[GetAway](https://getaway-app.herokuapp.com/) is built similarly to AirBnb. Users can create new accounts or login as a demo user to test the site. Logged in users can host locations with text descriptions and images. Users can also leave reviews on other locations as well. Logged in users can delete their own host locations and reviews that they have left, as well as edit them.

## Structure
This app includes: full CRUD for locations, full CRUD for reviews, and a search field to find locations by city, state, or country.
Features:
* Create an account
* Login and logout of your account
* Login as a demo user
* Create a location with a text description and images
* Edit a location
* Delete a location
* Create a review for a location
* Edit a review
* Delete a review
* View all locations by clicking "I'm Flexible" on the home page
* View locations in a certain preset city by clicking the appropriate link
* Search for a location by city, state, or country via the search bar

## Backend
All backend routes were built using Flask with Python.

## Frontend
Frontend components were built using React/Redux with Javascript

## Dependencies
### Backend
Includes:
* SQLAlchemy
* Flask-SQLAlchemy
* Flask
* Flask-WTF
* Flask-Cors
* itsdangerous
* Flask-Login
* Faker
* click
* flask-migrate
* Werkzeug

### Frontend
Includes:
* React
* React-Redux
* React-DOM
* react-router-dom
* redux
* redux-thunk
* react-scripts

## How to use this application
* Clone this repository
* Install dependencies using 
``` pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt ```
* Create a .env based on the example
* Set up your postgres database using .env variables
* Enter the pip shell, migrate and seed the database, and then run the flask app using 
```pipenv shell``` 
```flask db upgrade```
```flask seed all```
```flask run```
* To run the React App, cd into the react folder using 
```cd react-app```
then run ```npm install```
then run ```npm start```

## Splash Page
When a user visits the website, they are prompted to either login using their credentials, login using the demo login, or create a new account. Either logging in or using the demo login will redirect the logged in user to the home page.
![Splash](https://res.cloudinary.com/duscvhetx/image/upload/v1641225156/readme%20images/login_emarcr.png)

## Sign Up
When a user clicks the signup option from the splash page, they are redirected to a form to create a new account. Successfully creating an account will redirect them to the home page as a logged in user.
![SignUp](https://res.cloudinary.com/duscvhetx/image/upload/v1641225156/readme%20images/signup_osbdcw.png)

## Home Page
This is the first page a logged in user will see. There is an option to view all locations by clicking "I'm Flexible", and there are 4 preset cities to view locations from below. Clicking any of these buttons will redirect the user to a page displaying the appropriate locations. At the bottom of the home page, there is a link that redirects to the developer's (Omkar Mehendale) GitHub account. Similarly, there is a link that redirects to the developer's LinkedIn profile.
![Home](https://res.cloudinary.com/duscvhetx/image/upload/v1641225157/readme%20images/home_s0p9sy.png)

## NavBar
Logged in users will have access to the navbar, which is at the top of the page. This bar includes a return link to return immediately to the home page, a search bar to search for locations by city, state, or country, a host button that opens a modal to create a new location, and a logout button.

## Location Page
Clicking on a location will redirect the user to the single location page. This page will display all of the information about the location, including the name of the host, the images associated with it, it's description, amenities, and price. This page will also display reviews left by other users about this location.
![singlelocation](https://res.cloudinary.com/duscvhetx/image/upload/v1641225156/readme%20images/single_location_hbvsah.png)

## Explore
Clicking "I'm Flexible" from the home page will redirect the user to the explore page, which will display all locations for the user to peruse. Clicking any of these will redirect to the appropriate location page.
![explore](https://res.cloudinary.com/duscvhetx/image/upload/v1641225157/readme%20images/Explore_lso61p.png)
