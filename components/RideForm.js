import React, { useState } from 'react';

const RideForm = ({ onSubmit }) => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ pickup, dropoff });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} />
            <input type="text" placeholder="Dropoff Location" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
            <button type="submit">Book Ride</button>
        </form>
    );
};

export default RideForm;
