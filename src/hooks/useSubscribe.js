import { useState } from "react";
import { subscribeEmail } from "../api/api";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const subscribe = async (email) => {
    if (!email) {
      setError("Email tidak boleh kosong.");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage("");

    try {
      await subscribeEmail(email);
      setMessage("Berhasil subscribe! Terima kasih.");
    } catch (err) {
      setError(err.message || "Gagal subscribe. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error, message };
};

export default useSubscribe;
