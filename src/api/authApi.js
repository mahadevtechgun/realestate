import api from "./axios";

// =========================
// LOGIN
// =========================
export const loginUser = async (username, password) => {
  const response = await api.post("/jwt-auth/v1/token", {
    username,
    password,
  });

  return response.data;
};


// =========================
// GOOGLE LOGIN
// =========================
export const googleLoginUser = async (googleToken) => {
  const response = await api.post("/custom/v1/google-login", {
    access_token: googleToken,
  });

  return response.data;
};


// =========================
// REGISTER
// =========================
export const registerUser = async (name, email, password) => {
  const response = await api.post("/custom/v1/register", {
    name,
    email,
    password,
  });

  return response.data;
};


// =========================
// FORGOT PASSWORD
// =========================
export const forgotPassword = async (email) => {
  const response = await api.post("/custom/v1/forgot-password", {
    email,
  });

  return response.data;
};