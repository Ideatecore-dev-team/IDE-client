import { useState, useEffect } from "react";
import api from "../api/api";

const useGetArticleById = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.getArticleById(id);

        if (response && response.data) {
          setArticle(response.data);
        } else {
          setArticle(null);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch article");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchArticle();
  }, [id]);

  return { article, loading, error };
};

export default useGetArticleById;
