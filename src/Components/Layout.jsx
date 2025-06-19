import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import FMainContent from './FMainContent'; // Assuming this is the full-width version of MainContent

const Layout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Mobile Layout: show MainContent only */}
      <div className="block md:hidden h-full w-full">
        <MainContent />
      </div>
      {/* Desktop/Tablet Layout: Sidebar, FMainContent, Navbar */}
      <div className="hidden md:flex h-full w-full">
        {/* Sidebar - fixed on left */}
        <div className="w-72 h-screen fixed top-0 left-0 z-50 hidden md:block">
          <Sidebar isOpen={true} />
        </div>
        {/* MainContent - scrollable, margin for sidebar */}
        <div className="flex-1 ml-0 md:ml-72 h-screen overflow-y-auto overflow-x-hidden relative z-10">
          <FMainContent />
        </div>
        {/* Navbar - fixed on right */}
        {/* <div className="w-16 h-screen fixed top-0 right-0 z-50 hidden md:block">
          <Navbar />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
