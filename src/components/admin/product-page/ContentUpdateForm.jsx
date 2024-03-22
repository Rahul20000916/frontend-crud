import React, { useState, useEffect } from "react";
import axios from "axios";

const ContentUpdateForm = ({ id }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`https://crud-backend-siu8.onrender.com/admin/product/${id}`);
        const { title, category } = response.data; 
        setTitle(title);
        setCategory(category);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, [id]); 

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://crud-backend-siu8.onrender.com/admin/update_product/${id}`, { title, category });
      setUpdateSuccessful(true);
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-4xl mt-8">
      <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-700">UPDATE PRODUCT</h1>

      <form className="w-full max-w-md mx-auto p-6 bg-white rounded shadow-md" onSubmit={submitForm}>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="w-full mb-4 px-3 py-2 border rounded-md"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
        >
          <option value={category}>{category}</option>
          <option value="video">Video</option>
          <option value="podcast">Podcast</option>
          <option value="comics">Comics</option>
        </select>
        <button className="w-full px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600" type="submit">
          Update
        </button>
      </form>

      {updateSuccessful && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <p className="text-lg font-semibold mb-2">Update Successful!</p>
            <button onClick={reloadPage} className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentUpdateForm;
