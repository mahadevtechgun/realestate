import { useEffect, useState } from "react";
import RentHero from "../components/Rent/RentHero";
import LocationRents from "../components/Rent/LocationRents";
import FaqRent from "../components/Rent/FaqRent";
import Cta from "../components/ui/Cta";
import RentProperties from "../components/properties/RentProperties";
import PageLoader from "../components/ui/PageLoader";

function Rent({ setIsLoginOpen }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading Rent Properties..." />;
  }

  return (
    <>
      <RentHero />
      <RentProperties setIsLoginOpen={setIsLoginOpen} />
      <LocationRents />
      <FaqRent />
      <Cta />
    </>
  );
}

export default Rent;