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
        const response = await api.getArticles({ page, size, search }); // ✅ Search dikirim ke API
        console.log(
          `[FETCH ARTICLES] Page: ${page}, Size: ${size}, Search: ${search}`
        );
        console.log("[API RESPONSE]:", response.data);

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
  }, [page, size, search]); // ✅ Re-fetch saat search berubah

  return { articles, loading, error, pagination };
};

export default useGetArticles;
