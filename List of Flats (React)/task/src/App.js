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
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [available, setAvailable] = useState(false);

    const toggleAddFlatForm = () => {
        setAddFlatButtonVisibility(!isAddFlatButtonVisible);
        setAddFlatFormVisibility(!isAddFlatFormVisible);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleAvailableChange = (event) => {
        setAvailable(event.target.checked);
    }

    const handleAddFlatFormToList = (event) => {
        event.preventDefault(); // Prevent the default form submission

        let newFlat =
            {
                id: apartments.length + 1,
                name: '{event.target.name.value}',
                location: '{event.target.location.value}',
                price: '{event.target.price.value}',
                available: event.target.available.value,
                image: '{event.target.imageURL.value}',
            }

        apartments.push(newFlat);

    };

    return (

        <div>

            <h1>Super Flats</h1>

            { isAddFlatFormVisible ?

                <div>

                    <h2>Add Flat</h2>

                    <form className='form'>
                        <label className='label'>Name: <input type="text" id="name" value={name} onChange={handleNameChange} /></label>
                        <label className='label'>Location: <input type="text" name="location" value={location} onChange={handleLocationChange} /></label>
                        <label className='label'>Price: <input type="text" name="price" value={price} onChange={handlePriceChange} /></label>
                        <label className='label'>Image URL: <input type="text" name="imageURL" value={image} onChange={handleImageChange} /></label>
                        <label className='label'>Available? <input type="checkbox" name="available" value={Number(available)} onChange={handleAvailableChange} /></label>
                        <input type="submit" value="Add Flat"  className='button' onClick={handleAddFlatFormToList}/>
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
                                <p><img src={apartment.image} alt='image' /></p>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );

}

export default App;