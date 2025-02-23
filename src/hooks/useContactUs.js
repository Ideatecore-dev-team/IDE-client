import { useState } from "react";
import { toast } from "react-toastify";
import { submitContactUs } from "../api/api";

const useContactUs = () => {
  const [loading, setLoading] = useState(false);

  const submit = async ({ firstName, lastName, email, message }) => {
    if (!firstName) {
      toast.error("Nama depan diperlukan.");
      return false;
    }
    if (!lastName) {
      toast.error("Nama belakang diperlukan.");
      return false;
    }
    if (!email) {
      toast.error("Email diperlukan.");

      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Email tidak valid.");

      return false;
    }
    if (!message) {
      toast.error("Pesan diperlukan.");

      return false;
    }

    setLoading(true);

    try {
      await submitContactUs({ firstName, lastName, email, message });
      toast.success("Pesan Anda telah terkirim! Terima kasih.");
      return true;
    } catch (err) {
      toast.error(err.message || "Gagal mengirim pesan. Silakan coba lagi.");

      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
};

export default useContactUs;
