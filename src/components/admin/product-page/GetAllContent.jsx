import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentUploadForm from './ContentUploadForm';
import ContentUpdateForm from "./ContentUpdateForm";

const GetAllContent = () => {
  const [contents, setContents] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const response = await axios.get(
        "https://crud-backend-siu8.onrender.com/admin/get_product"
      );
      setContents(response.data);
    } catch (error) {
      console.error("Error fetching contents:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://crud-backend-siu8.onrender.com/admin/delete_product/${id}`);
      setDeleteId(id);
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      {updateId ? (
        <ContentUpdateForm id={updateId}  />
      ) : (
        <ContentUploadForm />
      )}
      {deleteId && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <p className="text-lg font-semibold mb-2">Item Deleted Successfully!</p>
            <button onClick={reloadPage} className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Close</button>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-4xl mb-4">
        <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-700">PRODUCTS</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">File Name</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr key={content._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {content.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {content.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {content.file}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-24 h-10"
                    onClick={() => setUpdateId(content._id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 w-24 h-10"
                    onClick={() => handleDelete(content._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllContent;
