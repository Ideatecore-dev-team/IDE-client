// eslint-disable-next-line no-unused-vars
import React from "react";

import { MdEmail } from "react-icons/md";
import ButtonLink from "./Buttons/ButtonLink";

export const ContactGetInTouch = () => {
  return (
    <div className="touch-card flex w-auto lg:w-[520px] py-8 px-4 flex-col items-start gap-6 self-stretch rounded-xl border-2 border-neutral-3">
      <div className="card-header flex flex-col items-start gap-3 self-stretch">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-base">
          Mari kolaborasi wujudkan generasi pemimpin indonesia!
        </p>
      </div>
      <div className="input-details flex flex-col  items-start gap-4 self-stretch">
        <div className="name-field flex flex-col lg:flex-row items-start gap-3 self-stretch">
          <input
            className="h-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
            type="text"
            id="font-name"
            name="font-name"
            placeholder="Nama Depan"
          />
          <input
            className="h-12 p-3 items-center gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Nama Belakang"
          />
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
          />
        </div>
        <input
          className="h-24 p-3 gap-3 self-stretch rounded-md border-[1px] border-neutral-3 bg-white w-full"
          type="text"
          id="free-text"
          name="fre-text"
          placeholder="Apa yang bisa kami bantu?"
        />
        <ButtonLink color="bg-brand-red hover:bg-brand-red-hover" caption="SUBMIT" width="w-full" />
      </div>
    </div>
  );
};
