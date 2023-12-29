
import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "../customerActions";
import "./AddCustomer.scss";


const AddCustomer: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    attendees: 0,
    foodServices: "",
    avServices: "",
    additionalInfo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      eventType: "",
      eventDate: "",
      attendees: 0,
      foodServices: "",
      avServices: "",
      additionalInfo: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    //handles the default submission of form
    e.preventDefault();
    const today = new Date();
    const eventDate = new Date(formData.eventDate);
    
    if (
      today.getFullYear() > eventDate.getFullYear() ||
      (today.getFullYear() === eventDate.getFullYear() &&
        today.getMonth() > eventDate.getMonth()) ||
      (today.getFullYear() === eventDate.getFullYear() &&
        today.getMonth() === eventDate.getMonth() &&
        today.getDate() > eventDate.getDate())
    ) {
      alert("Event date should be today or in the future");
      return;
    }
    
    
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.eventType ||
      !formData.eventDate 
    ) {
      // Display an error message where mandatory fields are not filled
      alert("Mandatory fields are not filled. Please check Firstname, lastname, email, phone, eventdate are filled or not.");
      return;
    }
    if (
      isNaN(formData.attendees) ||
      formData.attendees < 5 ||
      formData.attendees > 200
    ){
      
      alert("Number of Attedees should be Greater than 5 and Less than 200")
      return
    }
    // dispatching an action formdata=customer
    dispatch(addCustomer(formData));
    // dispatch(viewCustomer([ formData]));

    // Reset the form or perform other actions as needed
    handleReset();
    navigate('/')

    const formDataString = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Event Date: ${formData.eventDate}
      Event Type: ${formData.eventType}
      Attendees: ${formData.attendees}
      Food Services: ${formData.foodServices}
      AV Services: ${formData.avServices}
      Additional Info: ${formData.additionalInfo}
    `;
    
    alert(`Your submitted Data is :\n${formDataString}`);
  };

  return (
    // <Provider store={store}>
    <div className="maincontainer">
      <h2>
        <strong>Booking Request form</strong>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="left-side">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              className="custom-input"
              pattern="[A-Za-z]+"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />

            <label>Last Name: </label>
            <input
              type="text"
              name="lastName"
              className="custom-input"
              pattern="[A-Za-z]+"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <div className="right-side">
            <div>
              <label>
                Do You Require Food Services :
                <input
                  type="radio"
                  name="foodServices"
                  value="yes"
                  checked={formData.foodServices === "yes"}
                  onChange={() => handleRadioChange("foodServices", "yes")}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="foodServices"
                  value="no"
                  checked={formData.foodServices === "no"}
                  onChange={() => handleRadioChange("foodServices", "no")}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="left-side">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              className="custom-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="right-side">
            <div className="radio-group">
              <label>
                Do You Require Audio/Visual Services:
                <input
                  type="radio"
                  name="avServices"
                  value="yes"
                  checked={formData.avServices === "yes"}
                  onChange={() => handleRadioChange("avServices", "yes")}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="avServices"
                  value="no"
                  checked={formData.avServices === "no"}
                  onChange={() => handleRadioChange("avServices", "no")}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="left-side">
            <div className="form-group">
              <label>Phone Number: </label>
              <input
                type="tel"
                name="phoneNumber"
                pattern="[0-9]*"
                className="custom-input"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Type of Event:</label>
              <select
                name="eventType"
                className="cus-input"
                value={formData.eventType}
                onChange={handleSelectChange}
              >
                <option value="">Select Type</option>
                <option value="association">Association</option>
                <option value="corporation">Corporation</option>
                <option value="social">Social</option>
              </select>
            </div>
             

          <div className="form-group">
              <label>Number of Attendees:</label>
              <input
                type="number"
                name="attendees"
                value={formData.attendees}
                onChange={handleInputChange}
                min="5"
                max="200"
                className="custom-input"
              />
            </div>
      
            <div className="form-row">
              <div className="form-group">
                <label>Event Date:</label>
                <input
                  type="date"
                  // placeholder="DD-MM-YYYY"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="custom-input"
                />
              </div>
            </div>
          </div>

          <div className="right-side">
            <label>Additional Information:</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={5}
            />

            <div>
              <button
                type="reset"
                className="custom-button"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                 type="button"                
                 className="custom-button"
                onClick={handleSubmit}
              >
                Submit
              </button>
             
            </div>
          </div>
        </div>
      
      </form>
    </div>
    
  );
};

export default AddCustomer;
