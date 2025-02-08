import axios from "axios";

const BASE_URL = "https://server-ideindonesia.ideatecore.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = async (page = null, size = null, search = "") => {
  try {
    let endpoint = "/article?";

    const params = {};
    if (page !== null) params.page = page;
    if (size !== null) params.size = size;
    if (search) params.search = search;

    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
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
