import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  removeWishlist,
} from "../../redux/wishlistSlice";

import {
  addWishlistApi,
  removeWishlistApi,
} from "../../api/wishlistApi";

//Only import toast 
import { toast } from "react-toastify";
// voice import
import speak from "../../utils/speak";

export const WishlistIcon = ({ property, setIsLoginOpen }) => {
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist.wishlist
  );

  if (!property) return null;

  const isWishlist = wishlist.some(
    (item) => item.id === property.id
  );

  const toggleWishlist = async (e) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");

    
    // Login Check
if (!token) {
  if (setIsLoginOpen) {
    setIsLoginOpen(true);
  }

  toast.error("Please login first");
speak("Please login first");


  return;
}

    try {
      if (isWishlist) {
        // Remove from database
        await removeWishlistApi(property.id);
        dispatch(removeWishlist(property.id));
        
        //Success message for remove
      toast.success("Removed from wishlist!");
        speak("Removed from wishlist");
      } else {
        // Add to database
        await addWishlistApi(property.id);
        dispatch(addWishlist(property));
        
        //Success message for add
        toast.success("Added to wishlist!");
        speak("Added to wishlist");
        
      }
    } catch (error) {
      //Only show error message
      toast.error("Failed to update wishlist");
      speak("Failed to update wishlist");

    }
  };

  return (
    <div
      onClick={toggleWishlist}
      className="absolute top-4 right-4 w-10 h-10 bg-[#0F1115]/70 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer z-20"
    >
      {isWishlist ? (
        <FaHeart className="text-red-500 text-lg" />
      ) : (
        <FaRegHeart className="text-[#D4AF37] text-lg" />
      )}
    </div>
  );
};

export default WishlistIcon;