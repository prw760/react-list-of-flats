// stage 1 - show all the items in the flats array of objects
import React, { useState } from 'react';

function App() {

    const apartments = [
        {
            id: 1,
            name: 'Cozy Apartment',
            location: 'Downtown',
            price: '$1500/month',
            available: true,
            image: 'https://example.com/cozy-apartment.jpg',
        },
        {
            id: 2,
            name: 'Modern Loft',
            location: 'Midtown',
            price: '$1800/month',
            available: false,
            image: 'https://example.com/modern-loft.jpg',
        },
        {
            id: 3,
            name: 'Charming Studio',
            location: 'Uptown',
            price: '$1200/month',
            available: true,
            image: 'https://example.com/charming-studio.jpg',
        },
    ]

    const [isAddFlatButtonVisible, setAddFlatButtonVisibility] = useState(true);
    const [isAddFlatFormVisible, setAddFlatFormVisibility] = useState(false);

    const toggleAddFlatForm = (event) => {
        setAddFlatButtonVisibility(!isAddFlatButtonVisible);
        setAddFlatFormVisibility(!isAddFlatFormVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert('Form Submit Prevented');
    };

    return (

        <div>

            <h1>Super Flats</h1>


            { isAddFlatFormVisible ?

                <div>

                    <h2>Add Flat</h2>

                    <form onSubmit={handleSubmit} className='form'>
                        <label className='label'>Name: <input type="text" name="name" value='name' /></label>
                        <label className='label'>Location: <input type="text" name="location" value='location' /></label>
                        <label className='label'>Price: <input type="text" name="price" value='price' /></label>
                        <label className='label'>Image URL: <input type="text" name="imageURL" value='image' /></label>
                        <label className='label'>Available? <input type="checkbox" name="available" value='true' /></label>
                        <input type="submit" value="Submit"  className='button'/>
                    </form>

                </div>

                : null}

            { isAddFlatButtonVisible ? <button id='addFlatButton' className='button' name="Add Flat" onClick={toggleAddFlatForm}>Add Flat</button> : null}

            <h2>Flat List</h2>

            <ul>
                {apartments.map((apartment, index) => (
                    <div key={index}>
                        <li>
                            <div>
                                <h3>{apartment.name}</h3>
                                <p>Location: {apartment.location}</p>
                                <p>Price: {apartment.price}</p>
                                <p>{apartment.available}</p>

                                // add image here

                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );

}

export default App;