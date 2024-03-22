import React, { useState } from 'react';
import NavigationBar from '../../components/admin/dashboard-page/NavigationBar';
import Dashboard from '../../components/admin/dashboard-page/Dashboard';
import Products from '../../components/admin/product-page/Products';
import Mails from '../../components/admin/mail-page/Mails';
import Logout from '../../components/admin/dashboard-page/Logout';

const DashboardPage = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 const handleNavItemClick = (index) => {
    setActiveIndex(index);
 };

 return (
    <div className='w-full flex'>
      <NavigationBar onNavItemClick={handleNavItemClick} />
      <main className='grow'>
        {activeIndex === 0 && <Dashboard />}
        {activeIndex === 1 && <Products />}
        {activeIndex === 2 && <Mails />}
        {activeIndex === 3 && <Logout />}
      </main>
    </div>
 );
};

export default DashboardPage;
