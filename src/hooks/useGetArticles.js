import { useState, useEffect } from "react";
import api from "../api/api";

const useGetArticles = ({ page, size, search } = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await api.getArticles({ page, size, search });
        setArticles(response.data.data || []);
        setPagination(response.data.pagination || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, size, search]);

  return { articles, loading, error, pagination };
};

export default useGetArticles;
