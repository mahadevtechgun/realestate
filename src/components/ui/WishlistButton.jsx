import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";

function WishlistButton() {
  const isLoggedIn = !!localStorage.getItem("token");

  const wishlist = useSelector(
    (state) => state.wishlist.wishlist
  );

  const count = isLoggedIn ? wishlist.length : 0;

  return (
    <Link to="/wishlist">
      <button
        type="button"
        className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition"
      >
        <FiHeart size={18} />

        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full text-[10px] text-[#0F1115] font-bold flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
    </Link>
  );
}

export default WishlistButton;