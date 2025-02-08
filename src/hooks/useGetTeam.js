import { useState, useEffect } from "react";
import api from "../api/api";

const useGetTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await api.getTeam();

        if (response && Array.isArray(response.data)) {
          setTeam(response.data);
        } else {
          setTeam([]);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch team data");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return { team, loading, error };
};

export default useGetTeam;
