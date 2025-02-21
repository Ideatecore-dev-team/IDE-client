import axios from "axios";

const BASE_URL = "https://server-ideindonesia.ideatecore.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = async ({
  page,
  size,
  search,
  searchByCategory,
} = {}) => {
  let query = "/article?";
  if (page) query += `page=${page}&`;
  if (size) query += `size=${size}&`;
  if (search) query += `search=${search}&`;
  if (searchByCategory) query += `searchByCategory=${searchByCategory}&`; // ✅ Tambahkan kategori

  const fullUrl = `${BASE_URL}${query}`;
  try {
    const response = await axios.get(fullUrl);
    return response;
  } catch (error) {
    console.error("[API ERROR]:", error);
    throw error;
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await api.get(`/article/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getTeam = async () => {
  try {
    const response = await api.get(`/team`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/category`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    return [];
  }
};

export default {
  getArticles,
  getArticleById,
  getTeam,
  getAllCategories,
};

export const fetchCompanyInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/companyinfo`);
    if (!response.ok) {
      throw new Error("Failed to fetch company info");
    }
    const data = await response.json();
    return {
      linkedin: data.data.Linkedin,
      instagram: data.data.Instagram,
      youtube: data.data.Youtube,
      facebook: data.data.Facebook,
    }; 
  } catch (error) {
    console.error("Error fetching company info:", error);
    return {
      linkedin: "",
      instagram: "",
      youtube: "",
      facebook: "",
    }; 
  }
};

export const fetchGalleryImages = async () => {
  try {
    const response = await fetch("https://server-ideindonesia.ideatecore.com/gallery");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data.map(item => item.image);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return []; // Return an empty array in case of error
  }
};