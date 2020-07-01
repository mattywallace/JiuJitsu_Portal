import React from 'react';
import './App.css';
import UserContainer from './UserContainer'
import CardContainer from './CardContainer'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51H0AflH22wOMGrEDcPcs4DHZzkzJv4JtJgGAfBEQOCoSVwCDWN7NRqG5dVRIdhYT03FmxV6nVda9LSWf3vtbR3Ku00xHeRH0oW");

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <UserContainer Number={5} />
      </Elements> 

    </div>
  );
}

export default App;
