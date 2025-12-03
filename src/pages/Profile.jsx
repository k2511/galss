import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const API = "http://localhost:5000/api/auth";
import {useNavigate} from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    pincode: "",
    city: "",
    state: "",
    address: "",
    country: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('form', form)
    if( !form.address || !form.pincode || !form.city || !form.state || !form.country || !form.phone  ){
      toast.error('Please input all fields');
      return ;
    }

    try {
      const res = await axios.post(`${API}/profile`, form, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      // console.log("Address Saved:", res.data);
      
      toast.success("Address Saved Successfully");
      navigate('/payment-gateway');

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Profile / Address Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">


      <input
          type="text"
          placeholder="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="State"
          name="state"
          value={form.state}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

      

        <input
          type="text"
          placeholder="Country"
          name="country"
          value={form.country}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Save Address
        </button>

      </form>
    </div>
  );
};

export default Profile;
