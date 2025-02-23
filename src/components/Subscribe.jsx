// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import useSubscribe from "../hooks/useSubscribe"; // Sesuaikan path dengan lokasi useSubscribe.js

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const { subscribe, loading, error, message } = useSubscribe();

  const handleSubscribe = () => {
    subscribe(email);
  };

  return (
    <div className="subscribe-button flex items-center self-stretch">
      <input
        type="email"
        className="flex w-[200px] h-[48px] p-3 items-center gap-3 rounded-s-md border border-neutral-3 bg-white text-neutral-3"
        placeholder="Email anda"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="flex h-12 py-3 px-4 justify-center items-center gap-[10px] rounded-e-md bg-brand-red hover:bg-brand-red-hover w-full"
        onClick={handleSubscribe}
        disabled={loading}
      >
        <p className="text-sm font-bold">
          {loading ? "Mengirim..." : "Subscribe"}
        </p>
      </button>
      {message && <p className="text-sm mt-2 text-green-500">{message}</p>}
      {error && <p className="text-sm mt-2 text-red-500">{error}</p>}
    </div>
  );
};
