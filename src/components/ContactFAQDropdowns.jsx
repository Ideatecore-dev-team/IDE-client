/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const ContactFAQDropdowns = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-dropdown flex flex-col p-3 items-start self-stretch rounded-md border-[1px] gap-3 cursor-pointer bg-white hover:bg-neutral-100 ${
        isOpen ? "border-brand-red bg-neutral-100" : "border-neutral-3"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="dropdown-header flex items-center w-full">
        <p className="text-sm flex-1 text-neutral-1">{question}</p>
        <MdArrowDropDown
          size={24}
          className={`duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </div>

      {isOpen && (
        <>
          <hr className="border-b-[0.5px] w-full border-neutral-3" />
          <p className="text-sm text-neutral-1">{answer}</p>
        </>
      )}
    </div>
  );
};

export default ContactFAQDropdowns;
