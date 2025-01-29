const BASE_URL = "http://localhost:3001";

const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Fungsi-fungsi API spesifik
export const getArticles = async () => {
  return apiRequest("/article?");
};

export const getArticleById = async (id) => {
  return apiRequest(`/article/${id}`);
};

export default {
  getArticles,
  getArticleById,
};
