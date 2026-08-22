
import { Link } from "react-router-dom";
const Cta = () => {

  return (
    <div id="contact" className="max-w-[1300px] mx-auto px-5 py-20">
      <div className="bg-[var(--darkbg)]  rounded-[40px] py-16 px-8 md:p-20 text-center border border-white/10 shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
        <h2 className="text-2xl md:text-4xl font-bold text-[#F8F8F8] mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-[#A0A0A0] mb-8">
          Schedule a private tour with our luxury property specialists
        </p>
        <Link to="/Contact" className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] border-none px-8 py-3 rounded-[50px] text-[#0F1115] font-bold hover:scale-105 transition">
          Schedule Consultation →
        </Link>
      </div>
    </div>
  );
};

export default Cta;