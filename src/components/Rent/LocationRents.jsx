import React, { useEffect, useState } from 'react';
import { FaCity, FaBuilding, FaWater, FaSun } from 'react-icons/fa';
import { getProperties } from '../../api/getApi';

const LocationRents = () => {

  const [locationrent, setLocationrent] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const data = await getProperties();

        // only "For Rent" properties 
        const rentProperties = data.data?.filter((item) =>
          item.property_type?.includes("For Rent")
        ) || [];

        // Location property
        const locationCounts = {};

        rentProperties.forEach((item) => {
          const locationNames = item.property_location || [];

          if (locationNames.length === 0) {
            locationCounts["Other"] = (locationCounts["Other"] || 0) + 1;
          } else {
            locationNames.forEach((locName) => {
              locationCounts[locName] = (locationCounts[locName] || 0) + 1;
            });
          }
        });

        
        const groupedData = Object.entries(locationCounts).map(([name, count]) => ({
          name,
          count,
        }));

        setLocationrent(groupedData);

      } catch (error) {
        console.log("no location", error);
      }

    };

    fetchData();

  }, []);



  return (
    <div className="py-20 px-[5%] bg-[#0F1115]">
      <div className="max-w-[1300px] mx-auto">


        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-4 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[3px] uppercase">
              RENTAL INSIGHTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F8F8F8] to-[#D4AF37] bg-clip-text text-transparent animate-fade-up-delay-1">
            Properties by <span className="text-[#D4AF37]">Location</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-fade-up-delay-1 text-lg">
            Discover how many Properties are available for rent in prime locations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {locationrent.map((items, index) => (

            <div key={index} className="group bg-gradient-to-br from-[#171B22] to-[#1a1a2e] rounded-2xl p-6 text-center border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] animate-fade-up-delay-1">
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                <FaCity className="text-2xl text-[#D4AF37] group-hover:text-[#0F1115] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#F8F8F8] group-hover:text-[#D4AF37] transition">{items.name}</h3>
              <p className="text-4xl font-extrabold text-[#D4AF37] mt-2 group-hover:text-[#F5D97E] transition">{items.count}</p>
              <p className="text-[#A0A0A0] text-sm mt-1">Properties for Rent</p>
              <div className="w-12 h-0.5 bg-[#D4AF37]/30 mx-auto mt-3 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-500"></div>
            </div>

          ))}

          {locationrent.length === 0 && (
            <p className="col-span-2 md:col-span-4 text-center text-[#A0A0A0]">
              No rental properties found
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default LocationRents;