import React from "react";
import Chart from "./Chart";
function Dashboard() {
  return (
    <div className="flex flex-col space-y-3 py-16 px-14">
      <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-700">DASHBOARD</h1>

      <h3 className=" font-bold mb-4 mt-4 text-gray-600">CHART</h3>

      <div className="flex space-x-8 w-5/6">
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
