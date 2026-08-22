import axios from "axios";

const API = "https://efsolit.com/Headless/wp-json/realestate/v1";


// ===============================
// ADD WISHLIST
// ===============================
export const addWishlistApi = async (propertyId) => {
    const token = localStorage.getItem("token");

    return axios.post(
        `${API}/wishlist/add`,
        {
            property_id: propertyId,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
};


// ===============================
// REMOVE WISHLIST
// ===============================
export const removeWishlistApi = async (propertyId) => {
    const token = localStorage.getItem("token");

    return axios.delete(
        `${API}/wishlist/remove/${propertyId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};


// ===============================
// GET WISHLIST
// ===============================
export const getWishlistApi = async () => {
    const token = localStorage.getItem("token");

    return axios.get(
        `${API}/wishlist`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};


// ===============================
// CLEAR WISHLIST
// ===============================
export const clearWishlistApi = async () => {
    const token = localStorage.getItem("token");

    return axios.delete(
        `${API}/wishlist/clear`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};