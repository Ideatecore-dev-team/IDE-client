// eslint-disable-next-line no-unused-vars
import React from "react";

import ContactFAQDropdowns from "./ContactFAQDropdowns";

export const ContactFAQ = () => {
  const faqData = [
    {
      question: "Apa itu IDE Indonesia?",
      answer:
        "IDE Indonesia adalah organisasi yang bertujuan untuk mendukung inovasi, pendidikan, dan kolaborasi di Indonesia.",
    },
    {
      question: "Ada Program apa saja di IDE Indonesia?",
      answer:
        "Kami memiliki berbagai program untuk mendukung inovasi dan kolaborasi.",
    },
    {
      question: "Bagaimana cara join Core Team IDE Indonesia?",
      answer: "Anda dapat mendaftar melalui website resmi kami.",
    },
    {
      question: "Apa keuntungan join Core Team IDE Indonesia?",
      answer:
        "Anda akan mendapatkan pengalaman berharga dan jaringan profesional.",
    },
  ];

  return (
    <div className="faq-section flex justify-center items-start self-stretch">
      <div className="faq-container flex w-full px-6 lg:w-[1224px] py-12 flex-col items-center gap-8 border-t-[1px] border-neutral-3">
        {/* FAQ Heading */}
        <div className="faq-heading flex flex-col items-center gap-4 self-stretch">
          <h5 className="text-sm lg:text-base font-bold">FAQ</h5>
          <h3 className="text-lg lg:text-2xl font-bold text-center">
            Jelajahi Pertanyaan Populer Terkait IDE Indonesia
          </h3>
        </div>

        <div className="faq-dropdowns flex lg:w-[496px] flex-col items-start gap-3 xs:self-stretch">
          {faqData.map((faq, index) => (
            <ContactFAQDropdowns
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
