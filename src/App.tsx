
import React from 'react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
// import './styles.scss'

const App: React.FC = () => {
  return (
   
    <Provider store={store}>
       <Router>
       <Routes>
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/CustomerList" element={<CustomerList />} />
          <Route path="/" element={<Home />} />
        </Routes>

       </Router>
       </Provider>
 
  );
};

export default App;
