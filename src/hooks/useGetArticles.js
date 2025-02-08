import { useState, useEffect } from "react";
import api from "../api/api";

const useGetArticles = ({ page = null, size = null, search = "" } = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.getArticles(page, size, search);
        console.log("API Response:", response);

        setArticles(response?.data || []);
        setPagination(response?.pagination || null);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, size, search]);

  return { articles, loading, error, pagination };
};

export default useGetArticles;
