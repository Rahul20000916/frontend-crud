import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [subscriptionSuccessful, setSubscriptionSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://crud-backend-siu8.onrender.com/user-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: email }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setSubscriptionSuccessful(true);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const closePopup = () => {
    setSubscriptionSuccessful(false);
    setEmail("");
  };

  return (
    <footer className="bg-slate-200 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="sr-only">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-4 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Your Email"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-6 rounded-md focus:outline-none focus:bg-pink-600"
          >
            Subscribe
          </button>
        </form>
      </div>
      {subscriptionSuccessful && (
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
    </footer>
  );
};

export default SubscribeForm;
