import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://crud-backend-siu8.onrender.com/user-contact",
        formData
      );
      console.log(response.data);
      setMessageSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closePopup = () => {
    setMessageSent(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-slate-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-slate-700">
          Leave a message
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-pink-300 rounded-md shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-pink-300 rounded-md shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block font-medium">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full border-pink-300 rounded-md shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border-pink-300 rounded-md shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
          >
            Submit
          </button>
        </form>
      </div>
      {messageSent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <p className="text-lg font-semibold mb-2">
              Subscription Successful!
            </p>
            <button
              onClick={closePopup}
              className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
