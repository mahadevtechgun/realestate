import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";   
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Sale from "./pages/Sale";  
import Rent from "./pages/Rent";  
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";

import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import Agents from "./pages/Agents";
import Wishlist from "./pages/Wishlist";
import ScrollTop from './components/ui/ScrollTop';
import NotFound from "./pages/NotFound";
import Login from "./components/auth/Login";

import { getWishlistApi } from "./api/wishlistApi";
import { setWishlist } from "./redux/wishlistSlice";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const dispatch = useDispatch();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  useEffect(() => {
    const loadWishlist = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await getWishlistApi();
        dispatch(setWishlist(response.data.properties || []));
      } catch (error) {
        console.error("Wishlist fetch error"); 
      }
    };

    loadWishlist();
  }, [dispatch]);

  const openLogin = () => {
    setIsSignUpOpen(false);
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(true);
  };

  const openSignUp = () => {
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsSignUpOpen(true);
  };

  const openForgotPassword = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsForgotPasswordOpen(true);
  };

  return (
    <div>
      <Navbar setIsLoginOpen={setIsLoginOpen} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale setIsLoginOpen={setIsLoginOpen} />} />
        <Route path="/rent" element={<Rent setIsLoginOpen={setIsLoginOpen}/>} />  
        <Route path="/property/:id" element={<PropertyDetails />} /> 
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/agents" element={<Agents />} /> 
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} /> 
           <Route path="/faq" element={<Faq />} />  
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
      <ScrollTop /> 

      <Login 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToSignUp={openSignUp}
        onSwitchToForgotPassword={openForgotPassword}
      />
      
      <SignUp 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSwitchToLogin={openLogin}
      />

      <ForgotPassword 
        isOpen={isForgotPasswordOpen} 
        onClose={() => setIsForgotPasswordOpen(false)} 
        onSwitchToLogin={openLogin}
      />
    </div>
  );
}

export default App;