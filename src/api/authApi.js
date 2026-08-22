import api from "./axios";

// Login
export const loginUser =async(username, password)=>{

 const response = await api.post("/jwt-auth/v1/token", {
    username,
    password,
  });

  return response.data;
};

// Register
export const registerUser = async (name, email, password) => {
  const response = await api.post("/custom/v1/register", {
    name,
    email,
    password,
  });

  return response.data;
};



// Forgot Password
export const forgotPassword = async (email) => {
  const response = await api.post("/custom/v1/forgot-password", {
    email,
  });

  return response.data;
};