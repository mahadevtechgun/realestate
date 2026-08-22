import { useEffect, useState } from "react";

import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import Agents from "../components/home/Agents";
import Cta from "../components/ui/Cta";
import SaleProperties from "../components/properties/SaleProperties";
import RentProperties from "../components/properties/RentProperties";

import PropertiesRentHome from "../components/home/PropertiesRentHome";
import PropertiesSaleHome from "../components/home/PropertiesSaleHome";
import GlobalLoader from "../components/ui/GlobalLoader"; // ✅ Already imported

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Loading Screen - Fixed
  if (loading) {
    return <GlobalLoader />; 
  }

  return (
    <div>
      <Hero />
      <Statistics />
      <PropertiesRentHome />
      <PropertiesSaleHome />
      <Agents />
      <Cta />
    </div>
  );
}

export default Home;