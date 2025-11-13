import React, { useState } from 'react';
import Product from './Product';

export default function Shop() {
    const products = [
        { id: 1, title: 'Album 1', price: 5, img: 'images/Album 1.png' },
        { id: 2, title: 'Album 2', price: 15, img: 'images/Album 2.png' },
        { id: 3, title: 'Album 3', price: 20, img: 'images/Album 3.png' },
        { id: 4, title: 'Album 4', price: 100, img: 'images/Album 4.png' },
        { id: 5, title: 'Coffee', price: 5, img: 'images/Cofee.png' },
        { id: 6, title: 'Shirt', price: 50, img: 'images/Shirt.png' },
    ];

    const [shoppingCart, setShoppingCart] = useState([]);

    const socials = [
        {
            id: 1,
            href: 'https://www.youtube.com',
            img: 'Images/YouTube Logo.png',
        },
        {
            id: 2,
            href: 'https://www.spotify.com',
            img: 'Images/Spotify Logo.png',
        },
        {
            id: 3,
            href: 'https://www.facebook.com',
            img: 'Images/YouTube Logo.png',
        },
    ];

    return (
        <>
            <header className='main-header'>
                <nav className='main-nav nav'>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">STORE</a></li>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                </nav>
                <h1 className='band-name band-name-large'>React Shop</h1>
            </header>

            <section>
                <div className="shop-items">
                    <Product />
                </div>
            </section>

            <section></section>

            <footer></footer>
        </>
    );
}
