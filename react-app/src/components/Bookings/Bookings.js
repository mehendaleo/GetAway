import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookingThunk, loadUserBookings } from '../../store/booking';
import './bookings.css'


const Bookings = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const bookings = useSelector(state => state.booking);
    const bookingsArr = Object.assign([], bookings);

    useEffect(() => {
        dispatch(loadUserBookings(sessionUser.id))
    }, [dispatch, bookingsArr.length])

    const handleDelete = async(e) => {
        console.log(e.target.value)
        await dispatch(deleteBookingThunk(e.target.value))
    }

    if (bookingsArr.length > 0) return (
        <div className='bookings-parent-container'>
            <div className='all-bookings-container'>
                {bookingsArr?.map((b, i) => (
                    <div key={b.id} className='booking-container'>
                        <div className='pro-book-img-date'>
                            <div className='booking-date'>{b.start_date.split(" ").slice(0,4).join(" ")} - {b.end_date.split(" ").slice(0,4).join(" ")}</div>
                            <img src={b.location.images[0].image_url} className="booking-image"></img>
                        </div>
                        <div className='pro-book-info'>
                            <div>
                                <div>{b.location.name}</div>
                                <div>{b.location.city}, {b.location.state}, {b.location.country}</div>
                            </div>
                            <button onClick={handleDelete} value={b.id}className='logout-button booking-delete'>Delete Booking</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='google-maps-container'>
                    <h1>Google Maps coming soon!</h1>
            </div>
        </div>

    )
    else return (
        <h2>No bookings scheduled at this time</h2>
    )
};

export default Bookings;
