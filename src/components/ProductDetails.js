import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
//import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
//import ProductPage from './ProductPage';
import './ProductDetails.css'; 
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  //const {images, title, reviews, availability, brand, category, sku, price, previousPrice, description, size, color } = product;

  //console.log('Product Details:', product);
  const { id } = useParams();

    const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('id :',id);
  console.log(typeof id);

  
   

  useEffect(() => {
     
    // Fetch product details from the database
    fetch(`http://localhost:8099/api/${id}`)
      .then(response => response.json())
      .then(data => {
          console.log('Product data:', data);
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, []);

  console.log('Data:',product.name);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!product) {
    return <div>No product found</div>; 
  }

  const plusMinuceButton =
    'flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500';

  return (
    <section className="container-section">
      <div className="container-image">
        <img src={product.imageurl} alt={product.name}  />
      </div>

      <div className="container-details">
        <h2 className="title">{product.name}</h2>
              <div className="mt-1">

         
        </div>
       
        <p className="Brand">
          Brand: <span className="Brandname">{product.brand}</span>
        </p>
        <p className="Category">
          Time Period: <span className="font-normal">{product.warranty}</span>
        </p>
       
        <p className="price">
          {product.productPrice} 
        </p>
        <p className="description">{product.description}</p>
       
           
             
           
          </div>
        
        <div className="quantity">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`}>?</button>
            <div className="flex">1</div>
            <button className={`${plusMinuceButton}`}>+</button>
          </div>
        </div>
        <div className="buttonbox">
          <button className="cart">
            <BiShoppingBag className="mx-2" />
            Add to Cart
          </button>
          <button className="wishlist">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      
    </section>
  );
};/* <p className="availability">
          Availability: {product.availability ? <span className="text-green-600">In Stock</span> : <span className="text-red-600">Expired</span>}
        </p>*/

export default ProductDetails;

