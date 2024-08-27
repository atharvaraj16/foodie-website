import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Success from './pages/Success.jsx';
import Error from './pages/Error.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Components/CheckoutForm.jsx';

const stripePromise = loadStripe('your-publishable-key-here');

const App = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<ProtectedRoute element={<CheckoutForm />} />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Elements>
    </BrowserRouter>
  );
};

export default App;
