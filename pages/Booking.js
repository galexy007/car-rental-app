import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import RideForm from '../components/RideForm';

const Booking = () => {
    const [ride, setRide] = useState(null);

    const handleRideBooking = async (rideData) => {
        const response = await fetch('http://localhost:5000/api/rides/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...rideData, userId: '123' })  // Replace with actual user ID
        });
        const data = await response.json();
        setRide(data.ride);
    };

    return (
        <div>
            <h2>Book a Ride</h2>
            <RideForm onSubmit={handleRideBooking} />
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
                    defaultZoom={10}
                />
            </div>
            {ride && <p>Ride booked: {ride.pickup} to {ride.dropoff}</p>}
        </div>
    );
};

export default Booking;
