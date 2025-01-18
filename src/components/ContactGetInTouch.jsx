// eslint-disable-next-line no-unused-vars  
import React, { useState } from "react";  
import { MdEmail } from "react-icons/md";  
import ButtonLink from "./Buttons/ButtonLink";  
  
export const ContactGetInTouch = () => {  
  const [formData, setFormData] = useState({  
    firstName: "",  
    lastName: "",  
    email: "",  
    message: "",  
  });  
  
  const [errors, setErrors] = useState({});  
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [successMessage, setSuccessMessage] = useState("");  
  
  const validate = () => {  
    const errors = {};  
    if (!formData.firstName) {  
      errors.firstName = "Nama depan diperlukan";  
    }  
    if (!formData.lastName) {  
      errors.lastName = "Nama belakang diperlukan";  
    }  
    if (!formData.email) {  
      errors.email = "Email diperlukan";  
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {  
      errors.email = "Email tidak valid";  
    }  
    if (!formData.message) {  
      errors.message = "Pesan diperlukan";  
    }  
    return errors;  
  };  
  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  
  
  const handleSubmit = async (e) => {  
    e.preventDefault();  
    const validationErrors = validate();  
    if (Object.keys(validationErrors).length > 0) {  
      setErrors(validationErrors);  
      return;  
    }  
  
    setIsSubmitting(true);  
    setErrors({});  
    setSuccessMessage("");  
  
    try {  
      // Simulate form submission  
      await new Promise((resolve) => setTimeout(resolve, 1000));  
  
      // Reset form  
      setFormData({  
        firstName: "",  
        lastName: "",  
        email: "",  
        message: "",  
      });  
  
      setSuccessMessage("Pesan Anda telah terkirim!");  
    } catch (error) {  
      console.error("Error submitting form:", error);  
      setErrors({ form: "Terjadi kesalahan saat mengirim pesan. Coba lagi nanti." });  
    } finally {  
      setIsSubmitting(false);  
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
        {successMessage && (  
          <div className="bg-green-100 text-green-800 p-3 rounded-md">  
            {successMessage}  
          </div>  
        )}  
        {errors.form && (  
          <div className="bg-red-100 text-red-800 p-3 rounded-md">  
            {errors.form}  
          </div>  
        )}  
        <div className="name-field flex flex-col lg:flex-row items-start gap-3 self-stretch">  
          <div className="relative w-full">  
            <input  
              className={`h-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] ${  
                errors.firstName ? "border-red-500" : "border-neutral-3"  
              } bg-white w-full`}  
              type="text"  
              id="firstName"  
              name="firstName"  
              placeholder="Nama Depan"  
              value={formData.firstName}  
              onChange={handleChange}  
            />  
            {errors.firstName && (  
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>  
            )}  
          </div>  
          <div className="relative w-full">  
            <input  
              className={`h-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] ${  
                errors.lastName ? "border-red-500" : "border-neutral-3"  
              } bg-white w-full`}  
              type="text"  
              id="lastName"  
              name="lastName"  
              placeholder="Nama Belakang"  
              value={formData.lastName}  
              onChange={handleChange}  
            />  
            {errors.lastName && (  
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>  
            )}  
          </div>  
        </div>  
        <div className="email-field relative w-full">  
          <MdEmail  
            size={24}  
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"  
          />  
          <input  
            className={`h-12 pl-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] ${  
              errors.email ? "border-red-500" : "border-neutral-3"  
            } bg-white w-full`}  
            type="email"  
            id="email"  
            name="email"  
            placeholder="Email Anda"  
            value={formData.email}  
            onChange={handleChange}  
          />  
          {errors.email && (  
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>  
          )}  
        </div>  
        <div className="message-field relative w-full">  
          <textarea  
            className={`h-24 p-3 gap-3 self-stretch rounded-md border-[1px] ${  
              errors.message ? "border-red-500" : "border-neutral-3"  
            } bg-white w-full`}  
            id="message"  
            name="message"  
            placeholder="Apa yang bisa kami bantu?"  
            value={formData.message}  
            onChange={handleChange}  
          />  
          {errors.message && (  
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>  
          )}  
        </div>  
        <ButtonLink  
          color="bg-brand-red hover:bg-brand-red-hover"  
          caption="SUBMIT"  
          width="w-full"  
          onClick={handleSubmit}  
          disabled={isSubmitting}  
        />  
      </div>  
    </div>  
  );  
};  
