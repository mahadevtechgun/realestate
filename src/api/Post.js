import api from "./axios";

export const submitContactForm = async (formData) => {

  const response = await api.post(
    "/custom/v1/property-contact",
    formData
  );

  return response.data;

};

export const submitTourSchedule = async (formData) => {

  const response = await api.post(
    "/custom/v1/schedule-tour",
    formData
  );

  return response.data;

};