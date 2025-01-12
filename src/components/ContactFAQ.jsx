// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

export const ContactFAQ = () => {
  return (
    <div className="faq-section flex justify-center items-start self-stretch">
      <div className="faq-container flex w-96 lg:w-[1224px] py-12 flex-col items-center gap-8 border-t-[1px] border-neutral-3">
        <div className="faq-heading flex flex-col items-center gap-4 self-stretch">
          <h5 className="text-sm lg:text-base font-bold">FAQ</h5>
          <h3 className="text-lg lg:text-2xl font-bold text-center">
            Jelajahi Pertanyaan Populer Terkait IDE Indonesia
          </h3>
        </div>
        <div className="faq-dropdown flex lg:w-[496px] flex-col items-start gap-3 xs:self-stretch">
          <div className="faq-dropdown flex p-3 h-12 items-center self-stretch rounded-md border-[1px] border-neutral-3">
            <p className="text-sm flex-1 text-neutral-3">
              Apa itu IDE Indonesia?
            </p>
            <MdArrowDropDown size={24} />
          </div>
          <div className="faq-dropdown flex p-3 h-12 items-center self-stretch rounded-md border-[1px] border-neutral-3">
            <p className="text-sm flex-1 text-neutral-3">
              Ada Program apa saja di IDE Indonesia?{" "}
            </p>
            <MdArrowDropDown size={24} />
          </div>
          <div className="faq-dropdown flex p-3 h-12 items-center self-stretch rounded-md border-[1px] border-neutral-3">
            <p className="text-sm flex-1 text-neutral-3">
              Bagaimana cara join Core Team IDE Indonesia?{" "}
            </p>
            <MdArrowDropDown size={24} />
          </div>
          <div className="faq-dropdown flex p-3 h-12 items-center self-stretch rounded-md border-[1px] border-neutral-3">
            <p className="text-sm flex-1 text-neutral-3">
              Apa keuntungan join Core Team IDE Indonesia?{" "}
            </p>
            <MdArrowDropDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
