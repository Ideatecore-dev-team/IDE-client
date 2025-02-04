import { useState, useEffect } from "react";
import api from "../api/api";

const GetTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await api.getTeam();
        setTeam(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return { team, loading, error };
};

export default GetTeam;
