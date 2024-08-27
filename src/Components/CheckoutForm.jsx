// CheckoutForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Checkoutcard from './Checkoutcard';
const CheckoutForm = () => {
    const Navigate=useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Call your backend to create the PaymentIntent
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Here you can call your backend to complete the payment
    }
  };
  const cartItems = useSelector((state) => state.cart.cart)
  const totalqty=cartItems.reduce((totalqty,items)=>totalqty+items.qty,0);
  const totalamt=cartItems.reduce((totalamt,items)=>totalamt+items.qty*items.price,0);
  return (
 <div className='h-screen items-center justify-center flex flex-col overflow-y-scroll'>    
    
    
    <div className='text-4xl font-semibold text-zinc-800'>Total Cost : ₹{totalamt}.00</div>
      <form onSubmit={handleSubmit} className="w-[80vw] max-w-lg my-6 mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="card-element" className="block text-sm font-medium text-gray-700 mb-2">
          Credit or Debit Card
        </label>
        <div className="border rounded-md p-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>
      <button onClick={()=>Navigate('/success')} type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
        Pay
      </button>
    </form>
    <div className='flex flex-col gap-2 items-center justify-center overflow-y-auto max-h-[40vh] '>
    {cartItems.map((food,index)=>{
        return  <Checkoutcard key={index} id={food.id} name={food.name} img={food.img} qty={food.qty} price={food.price}/>
    })}
    </div>
    </div>
  );
};

export default CheckoutForm;
