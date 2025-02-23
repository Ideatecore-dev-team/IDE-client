import { useState } from "react";
import { toast } from "react-toastify";
import { subscribeEmail } from "../api/api"; // Sesuaikan path

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email) => {
    if (!email) {
      toast.error("Email tidak boleh kosong.");
      return;
    }

    setLoading(true);

    try {
      await subscribeEmail(email);
      toast.success("Berhasil subscribe! Terima kasih.");
    } catch (err) {
      toast.error(err.message || "Gagal subscribe. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading };
};

export default useSubscribe;
