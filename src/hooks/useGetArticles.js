import { useState, useEffect } from "react";
import api from "../api/api";

const useGetArticles = ({ page, size, search, searchByCategory } = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [usedCategories, setUsedCategories] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await api.getArticles({
          page,
          size,
          search,
          searchByCategory,
        });
        setArticles(response.data.data || []);
        setPagination(response.data.pagination || null);
      } catch (err) {
        console.error("[API ERROR]:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, size, search, searchByCategory]);

  return { articles, loading, error, pagination, usedCategories };
};

export default useGetArticles;
