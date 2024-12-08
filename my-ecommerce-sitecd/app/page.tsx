'use client';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Image from 'next/image';
import image1 from './assets/shadow.jpg';
import image2 from './assets/blush.jpg';
import image3 from './assets/lipstick.jpg';
import image4 from './assets/blander.jpg';
import image5 from './assets/eyeshadow.jpg';
import image6 from './assets/mascara.jpg';
import image7 from './assets/pomade.jpg';
import image8 from './assets/shadow1.jpg';
import Grid from './Components/Grid';
import Slider from './Components/Slider';
import Member from './Components/user';
import Promotion from './Components/Promotion';

const Home = () => {
  const products = [
    { id: 1, name: 'BLUSH ON | FLUSHED BEAUTY | LUXE COLLECTION', price: 299.99, rate: 4.5, image: image1 },
    { id: 2, name: 'FLUSH BLUSH ON | 3 SHADES | LUXURY GLOW', price: 49.99, rate: 3.8, image: image2 },
    { id: 3, name: 'LIPSTICK COLLECTION | FLIRTY FINISH | LUXE-5', price: 19.99, rate: 4.2, image: image3 },
    { id: 4, name: 'MAKEUP BLENDER | FLAWLESS FINISH | LUXE-12', price: 390.99, rate: 4.7, image: image4 },
    { id: 5, name: 'EYE SHADOW PALETTE | VIBRANT HUES | LUXE-7', price: 59.99, rate: 4.0, image: image5 },
    { id: 6, name: 'VOLUMIZING MASCARA | LASH-BOOST 24H | LUXE-8', price: 248.99, rate: 4.3, image: image6 },
    { id: 7, name: 'LIPSTICK ESSENCE | BOLD & BEAUTIFUL | LUXE-7', price: 19.99, rate: 4.6, image: image7 },
    { id: 8, name: 'EYE SHADOW COLLECTION | RADIANT SHADES | LUXE-5', price: 34.99, rate: 4.1, image: image8 },
  ];

  // Cart state
  const [cart, setCart] = useState<any[]>([]);

  // Handle add to cart
  const addToCart = (product: any) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // If product already in cart, increase quantity
    } else {
      updatedCart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Cart item count for the Header
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  

  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto py-8 min-h-screen mt-24">
        <h1 className="text-6xl text-pink-600 font-bold mb-10 text-center">New Products</h1>
        <section className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="relative group">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 group-hover:scale-105 transition-all duration-300 rounded-lg"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xl font-bold">Shop Now</p>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-4">{product.name}</h2>
              <p className="mt-2 text-gray-600">${product.price}</p>

              {/* Show rating */}
              <div className="flex items-center mt-2 text-yellow-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < product.rate ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>

              {/* Add to Cart button under the rating */}
              <button
                onClick={() => addToCart(product)} // Add to Cart
                className="mt-4 w-full py-2 px-4 bg-pink-600 text-white rounded-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </main>
      <Grid />
      <Slider />
      <Member/>
      <Promotion />
      <Footer />
    </>
  );
};

export default Home;






