import { useState, useEffect } from "react";
import { getAllCategories } from "../api/api";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        console.error("❌ Error in useGetCategories:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
