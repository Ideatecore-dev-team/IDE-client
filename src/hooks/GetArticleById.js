import { useState, useEffect } from "react";
import api from "../api/api";

const GetArticleById = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.getArticleById(id);
        setArticle(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchArticle();
  }, [id]);

  return { article, loading, error };
};

export default GetArticleById;
