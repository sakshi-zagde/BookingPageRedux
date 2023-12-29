import React, { useState } from "react";
import "./styles.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./rootReducer";
import { viewCustomer } from "./customerActions";


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customers);

  const handleButtonClick = () => {
    // Dispatch VIEW_CUSTOMER action with the updated customer data
    dispatch(viewCustomer(customers));
  };

  return (
    <div className="containerbottle">

      
            <h1>
              <strong>Event Booking System</strong>
            </h1>

           <div className="imgage"> <img
              className="full-width-image"
              src="https://www.shutterstock.com/image-photo/happy-african-american-young-employee-600nw-1575620572.jpg"
              alt="Event Background"
            /></div>
      <div>
        <nav>
          <div>
            <button>
              <Link to="/add-customer">BOOK EVENT</Link>
            </button>

            <button onClick={handleButtonClick}>
              <Link to="/CustomerList">SHOW ALL BOOKINGS</Link>
            </button>
          </div>
        </nav>
      </div>
     
    </div>
  );
};
export default Home;