import { useEffect, useState } from "react";
import LocationStats from "../components/sale/LocationStats";
import SaleHero from "../components/sale/SaleHero";
import FAQ from "../components/sale/Faq";
import Cta from "../components/ui/Cta";
import SaleProperties from "../components/properties/SaleProperties";
import PageLoader from "../components/ui/PageLoader";

function Sale({ setIsLoginOpen }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading Sale Properties..." />;
  }

  return (
    <>
      <SaleHero />
      <SaleProperties setIsLoginOpen={setIsLoginOpen} />
      <LocationStats />
      <FAQ />
      <Cta />
    </>
  );
}

export default Sale;