/* eslint-disable no-unused-vars */  
import React, { useState } from "react";  
import { MdArrowDropDown } from "react-icons/md";  
import { OurProgramDropdownContent } from "./OurProgramDropdownContent";  
  
export const OurProgramWhat = () => {  
  const [selectedProgram, setSelectedProgram] = useState("1"); // Default value set to "1"  
  
  const handleSelectionChange = (e) => {  
    setSelectedProgram(e.target.value);  
  };  
  
  const programOptions = [  
    { id: "1", name: "Democracy Affairs" },  
    { id: "2", name: "Education Affairs" },  
    { id: "3", name: "Social Affairs" },  
    { id: "4", name: "Entrepreneurship Affairs" },  
    { id: "5", name: "Media, Art, And Creative Affairs" },  
  ];  
  
  return (  
    <div className="what-we-do-section flex justify-center items-start self-stretch ">  
      <div className="what-we-do-container flex lg:w-[1224px] w-full xs:px-6 py-12 flex-col items-start">  
        <div className="title flex lg:w-[520px] flex-col items-start gap-4 xs:self-stretch">  
          <div className="title-desc flex flex-col gap-3 items-start self-stretch">  
            <h2 className="text-2xl lg:text-[32px] font-bold">What We Do?</h2>  
            <p className="text-base">  
              Pelajari lebih lanjut tentang kegiatan yang kami lakukan di setiap  
              program.  
            </p>  
          </div>  
          <div className="dropdown relative w-full">  
            <select  
              className="flex p-3 items-start w-full rounded-md border-[1px] border-neutral-3 hover:bg-neutral-3-hover appearance-none"  
              onChange={handleSelectionChange}  
              value={selectedProgram}  
            >  
              {programOptions.map((option) => (  
                <option key={option.id} value={option.id}>  
                  {option.name}  
                </option>  
              ))}  
            </select>  
            <MdArrowDropDown  
              className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-500 pointer-events-none"  
              size={24}  
            />  
          </div>  
        </div>  
        <OurProgramDropdownContent programId={selectedProgram} />  
      </div>  
    </div>  
  );  
};  
