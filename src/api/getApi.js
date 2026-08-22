import api from "./axios";

export const getProperties = async () => {
  const response = await api.get("/custom/v1/Properties");
  return response.data;
};

export const getPropertyCategories = async () => {
  const response = await api.get("/wp/v2/property_category");
  return response.data;
};


export const getPropertyLocations = async () => {
  const response = await api.get("/wp/v2/property_location");
  return response.data;
};

export const getPropertyTypes = async () => {
  const response = await api.get("/wp/v2/property_type");
  return response.data;
};