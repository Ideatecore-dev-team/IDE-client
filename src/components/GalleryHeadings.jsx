import React from "react";

export const GalleryHeadings = () => {
  return (
    <div className="gallery-head-section flex flex-col items-center self-stretch">
      <div className="gallery-head-container flex w-full lg:w-[1224px] xs:px-6 flex-col items-start gap-6 pt-12 pb-6">
        <div className="gallery-heading flex xs:flex-col gap-8 items-start lg:items-center lg:justify-between self-stretch">
          <div className="heading flex flex-col items-start gap-4 xs:self-stretch xs:w-full">
            <h5 className="text-sm lg:text-base font-bold">GALLERY</h5>
            <h1 className="text-[32px] lg:text-[48px] font-bold">
              Our Story in Pictures
            </h1>
          </div>
          <div className="quotes flex items-start gap-6 self-stretch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
            >
              <path
                d="M15.2 21.86V15.06C15.2 11.1667 16.1067 7.96667 17.92 5.46C19.7867 2.9 22.48 1.24667 26 0.5V4.9C24.2934 5.32667 22.96 6.12667 22 7.3C21.04 8.42 20.4534 9.80667 20.24 11.46H24.4V21.86H15.2ZM0.400024 21.86V15.06C0.400024 11.1667 1.30669 7.96667 3.12002 5.46C4.98669 2.9 7.68002 1.24667 11.2 0.5V4.9C9.49336 5.32667 8.16003 6.12667 7.20002 7.3C6.24002 8.42 5.65336 9.80667 5.44002 11.46H9.60002V21.86H0.400024Z"
                fill="#C82121"
              />
            </svg>
            <p className="xs:flex-1 lg:w-[346px] text-base">
              “Leadership is the capacity to translate vision into reality.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
