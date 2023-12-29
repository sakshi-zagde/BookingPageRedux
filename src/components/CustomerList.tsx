


import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import "./CustomerList.scss";
import { useNavigate } from "react-router-dom";


const CustomerList: React.FC = () => {
  const customers = useSelector((state: RootState) => state.customers);  console.log(customers);
  const navigate=useNavigate()
  return (
    <div className="tablecontainer">
      <h2>BOOKING DETAILS</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Type of Event</th>
            <th>Event Date</th>
            <th>Attendees</th>
            <th>Food </th>
            <th>AV Services</th>
            <th>Additional Information</th>
          </tr>
        </thead>
        <tbody>
        {customers?.map((customer: any, index: number) => (
             <tr key={index}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.eventType}</td>
              <td>{customer.eventDate}</td>
              <td>{customer.attendees}</td>
              <td>{customer.foodServices}</td>
              <td>{customer.avServices}</td>
              <td>{customer.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
       <button onClick={()=>navigate('/')}><strong>Home Page</strong></button>
    </div>
  );
};

export default CustomerList;
