import React, { useState } from 'react';
import Product from './Product';
import CartProduct from './CartProduct';
import Social from './Social';

export default function Shop() {
    const products = [
        { id: 1, title: 'Album 1', price: 5, img: 'public/images/Album-1.png' },
        {
            id: 2,
            title: 'Album 2',
            price: 15,
            img: 'public/images/Album-2.png',
        },
        {
            id: 3,
            title: 'Album 3',
            price: 20,
            img: 'public/images/Album-3.png',
        },
        {
            id: 4,
            title: 'Album 4',
            price: 100,
            img: 'public/images/Album-4.png',
        },
        { id: 5, title: 'Coffee', price: 5, img: 'public/images/Cofee.png' },
        { id: 6, title: 'Shirt', price: 50, img: 'public/images/Shirt.png' },
    ];

    const [shoppingCart, setShoppingCart] = useState([]);

    const socials = [
        {
            id: 1,
            href: 'https://www.youtube.com',
            img: 'public/images/YouTube-Logo.png',
        },
        {
            id: 2,
            href: 'https://www.spotify.com',
            img: 'public/images/Spotify-Logo.png',
        },
        {
            id: 3,
            href: 'https://www.facebook.com',
            img: 'public/images/Facebook-Logo.png',
        },
    ];

    function addProductToCart(productId) {
        // console.log(productId);

        let mainProduct = products.find((product) => {
            return product.id === productId;
        });

        // console.log(mainProduct);

        if (!shoppingCart.find((item) => item.id === mainProduct.id)) {
            setShoppingCart([...shoppingCart, mainProduct]);
        }
        // console.log(shoppingCart);
    }

    const emptyHandler = () => {
        setShoppingCart([]);
    };

    const removeProductFromCart = (productId) => {
        // console.log(productId);

        let newShoppingCart = shoppingCart.filter((product) => {
            return product.id !== productId;
        });

        // console.log(newShoppingCart);

        setShoppingCart([...newShoppingCart]);
    };

    return (
        <>
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">STORE</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">React Shop</h1>
            </header>

            <section className="container content-section">
                <div className="shop-items">
                    {products.map((product) => (
                        <Product
                            {...product}
                            onAddProduct={addProductToCart}
                            key={product.id}
                        />
                    ))}
                </div>
            </section>

            <section className="container content-section">
                <h2 className="section-header">CART</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">
                        ITEM
                    </span>
                    <span className="cart-price cart-header cart-column">
                        PRICE
                    </span>
                    <span className="cart-quantity cart-header cart-column">
                        Doing
                    </span>
                </div>
                <div className="cart-items">
                    {shoppingCart.map((pro) => (
                        <CartProduct
                            {...pro}
                            onRemove={removeProductFromCart}
                            key={pro.id}
                        />
                    ))}
                </div>

                <button
                    onClick={emptyHandler}
                    className="btn btn-primary btn-purchase"
                    type="button"
                >
                    Empty Cart
                </button>
            </section>

            <footer className="main-footer">
                <div className="container main-footer-container">
                    <h3 className="band-name">The Generics</h3>
                    <ul className="nav footer-nav">
                        {socials.map((soc) => (
                            <Social {...soc} key={soc.id} />
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    );
}
