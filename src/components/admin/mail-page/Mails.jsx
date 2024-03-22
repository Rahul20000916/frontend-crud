import React, { useState, useEffect } from "react";
import axios from "axios";

const Mails = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "https://crud-backend-siu8.onrender.com/admin/get_messages"
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/delete_message/${id}`);
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="mx-auto max-w-4xl mb-4">
      <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-700">MESSAGES</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Mobile</th>
            <th className="border border-gray-300 px-4 py-2">Message</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message._id}>
              <td className="border border-gray-300 px-4 py-2">
                {message.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {message.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {message.mobile}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {message.message}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 w-24 h-10"
                  onClick={() => handleDelete(message._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mails;
