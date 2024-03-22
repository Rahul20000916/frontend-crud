import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("category", category);
    
    try {
      const response = await axios.post(
        "https://crud-backend-siu8.onrender.com/admin/add_product",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response);
      setSubmissionSuccessful(true);
    } catch (error) {
      console.error(error);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-4xl mt-8">
      <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-700">CREATE PRODUCT</h1>

      <form className="w-full max-w-md mx-auto p-6 bg-white rounded shadow-md" onSubmit={submitForm}>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <select
          className="w-full mb-4 px-3 py-2 border rounded-md"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          <option value="video">Video</option>
          <option value="podcast">Podcast</option>
          <option value="comics">Comics</option>
        </select>
        <button
          className="w-full px-4 py-2 text-white bg-pink-600 rounded hover:bg-pink-700"
          type="submit"
        >
          Submit
        </button>
      </form>

      {submissionSuccessful && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <p className="text-lg font-semibold mb-2">Submission Successful!</p>
            <button onClick={reloadPage} className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
