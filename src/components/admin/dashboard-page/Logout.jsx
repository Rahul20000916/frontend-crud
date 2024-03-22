import React from 'react';

const Logout = () => {

  const handleLogout = () => {
    localStorage.removeItem('admintoken');
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p>Are you sure you want to log out?</p>
          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Continue to Logout
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default Logout;
