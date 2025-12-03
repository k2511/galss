import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000";
import { useNavigate } from 'react-router-dom';

export const OrderContext = createContext();
import toast from "react-hot-toast";
export const OrderProvider = ({ children }) => {


  const [order, setOrders] = useState({});



  return (
    <OrderContext.Provider
      value={{
        order, setOrders
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
