// import Hero from '../Components/Hero';
// import Header from '../Components/Header';
// import ProductCard from '../Components/ProductCard';

// const Home = () => {
//   const products = [
//     { id: 1, name: 'Product A', price: 29.99, image: '/product-a.jpg' },
//     { id: 2, name: 'Product B', price: 49.99, image: '/product-b.jpg' },
//   ];

//   return (
//     <main>
//       <Hero />
//       <section className="max-w-6xl mx-auto py-8">
//         <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;









// // 'use client';

// // import Hero from '../Components/Hero';
// // import ProductCard from '../Components/ProductCard';
// // import Header from '../Components/Header';

// // const Home = () => {
// //   const products = [
// //     { id: 1, name: 'Product A', price: 29.99, image: '/product-a.jpg' },
// //     { id: 2, name: 'Product B', price: 49.99, image: '/product-b.jpg' },
// //   ];

// //   return (
// //     <main>
// //       <Header />
// //       <Hero />
// //       <section className="max-w-6xl mx-auto py-8">
// //         <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {products.map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Home;




// import { useState } from 'react';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import Hero from '../Components/Hero';

// const Home = () => {
//   const [cart, setCart] = useState<any[]>([]); // Cart state to manage products added to the cart

//   // Sample products with different prices
//   const products = [
//     { id: 1, name: 'Product 1', price: 100, image: '/placeholder.png' },
//     { id: 2, name: 'Product 2', price: 200, image: '/placeholder.png' },
//     { id: 3, name: 'Product 3', price: 300, image: '/placeholder.png' },
//   ];

//   // Function to handle adding products to the cart
//   const addToCart = (product: any) => {
//     setCart([...cart, product]);
//     alert(`${product.name} has been added to your cart!`);
//   };

//   return (
//     <>
//       <Header />
//       <main className="container mx-auto py-8">
//         <Hero />
//         <section className="products grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//           {products.map((product) => (
//             <div key={product.id} className="border p-4 rounded">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <h2 className="text-xl font-bold mt-4">{product.name}</h2>
//               <p className="mt-2 text-gray-600">${product.price}</p>
//               <button
//                 onClick={() => addToCart(product)} // Add product to the cart on button click
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Home;
