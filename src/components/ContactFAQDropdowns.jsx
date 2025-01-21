/* eslint-disable react/prop-types */  
// eslint-disable-next-line no-unused-vars  
import React, { useState } from "react";  
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";  
import { motion } from "framer-motion"; 
  
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
          className={`duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}  
        />  
      </div>  
  
      <motion.div  
        initial={{ opacity: 0, height: 0 }} // Initial state  
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }} // Animate based on isOpen  
        exit={{ opacity: 0, height: 0 }} // Animate when closing  
        transition={{ duration: 0.3 }} // Transition duration  
        className=" ease-in-out transform"
      >  
        {isOpen && (  
          <>  
            <hr className="border-b-[0.5px] lg:w-[470px] border-neutral-3" />  
            <p className="text-sm text-neutral-1 lg:w-[470px] pt-[12px]">{answer}</p>  
          </>  
        )}  
      </motion.div>  
    </div>  
  );  
};  
  
export default ContactFAQDropdowns;  
