import React, { useEffect, useState } from 'react';
import Home from "./scenes/Home"
import Benefits from "./scenes/Benefits"
import Navbar from './scenes/navbar/Navbar';
import { SelectedPage } from './Shared/Types';
import OurClasses from './scenes/OurClasses';
import ContactUs from './scenes/ContactUs';

enum SelectedPage {
  HOME = "home",
  Benefits = "benefits",
  OurClasses = "Ourclasses",
  ContactUs = "contactUs",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HOME);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTopOfPage])
  return (
    <div className="app bg-gray-50">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <Benefits
        setSelectedPage={setSelectedPage}
      />
      <OurClasses
        setSelectedPage={setSelectedPage}
      />
      <ContactUs
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App; 