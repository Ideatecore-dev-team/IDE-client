/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import ButtonLink from "./Buttons/ButtonLink";
import useContactUs from "../hooks/useContactUs";

export const ContactGetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { submit, loading } = useContactUs();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submit(formData);
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="touch-card flex w-auto lg:w-[520px] py-8 px-4 flex-col items-start gap-6 self-stretch rounded-xl border-2 border-neutral-3">
      <div className="card-header flex flex-col items-start gap-3 self-stretch">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-base">
          Mari kolaborasi wujudkan generasi pemimpin Indonesia!
        </p>
      </div>
      <div className="input-details flex flex-col items-start gap-4 self-stretch">
        <div className="name-field flex flex-col lg:flex-row items-start gap-3 self-stretch">
          <div className="relative w-full">
            <input
              className="h-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Nama Depan"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="relative w-full">
            <input
              className="h-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Nama Belakang"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="email-field relative w-full">
          <MdEmail
            size={24}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
          />
          <input
            className="h-12 pl-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
            type="email"
            id="email"
            name="email"
            placeholder="Email Anda"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="message-field relative w-full">
          <textarea
            className="h-24 p-3 gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
            id="message"
            name="message"
            placeholder="Apa yang bisa kami bantu?"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <ButtonLink
          color="bg-brand-red hover:bg-brand-red-hover"
          textColor="text-white"
          caption={loading ? "Mengirim..." : "SUBMIT"}
          width="w-full"
          onClick={handleSubmit}
          disabled={loading}
        />
      </div>
    </div>
  );
};
