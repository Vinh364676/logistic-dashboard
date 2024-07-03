import axios, { AxiosResponse } from 'axios';

// Define the base URL for the API
const baseUrl = 'https://be-logistic.onrender.com';

const getToken = (): string | null => {
  return localStorage.getItem('token');
};


export const getAsync = async (url: string, params?: any): Promise<AxiosResponse> => {
  try {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.get(`${baseUrl}${url}`, { headers, params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const postAsync = async (url: string, data: any): Promise<AxiosResponse> => {
  try {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.post(`${baseUrl}${url}`, data, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

// Function to send a PUT request
export const putAsync = async (url: string, data: any): Promise<AxiosResponse> => {
  try {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.put(`${baseUrl}${url}`, data, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

// Function to send a DELETE request with token
export const deleteAsync = async (url: string): Promise<AxiosResponse> => {
  try {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.delete(`${baseUrl}${url}`, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};