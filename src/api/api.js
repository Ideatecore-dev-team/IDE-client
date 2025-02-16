import axios from "axios";

const BASE_URL = "https://server-ideindonesia.ideatecore.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = async ({ page, size, search } = {}) => {
  let query = "/article?";
  if (page) query += `page=${page}&`;
  if (size) query += `size=${size}&`;
  if (search) query += `search=${search}&`;

  const fullUrl = `${BASE_URL}${query}`;
  console.log("[API HIT] GET:", fullUrl);

  try {
    const response = await axios.get(fullUrl);
    console.log("[API RESPONSE]:", response.data);
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

export default {
  getArticles,
  getArticleById,
  getTeam,
};
