/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import GetTeam from "../hooks/GetTeam";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Staff1 from "../assets/images/staff-1.png";
import Staff2 from "../assets/images/staff-2.png";
import Staff3 from "../assets/images/staff-3.png";
import Staff4 from "../assets/images/staff-4.png";
import Staff5 from "../assets/images/staff-5.png";
import Staff6 from "../assets/images/staff-6.png";
import Staff7 from "../assets/images/staff-7.png";
import Staff8 from "../assets/images/staff-8.png";

import { motion } from "framer-motion";

const staffMembers = [
  {
    id: 1,
    name: "Atep Saifullah",
    position: "Daily Chairman",
    image: Staff1,
    category: "Core Team",
  },
  {
    id: 2,
    name: "Siti Aminah",
    position: "Project Manager",
    image: Staff2,
    category: "Core Team",
  },
  {
    id: 3,
    name: "Atep Rizal",
    position: "Lead Developer",
    image: Staff3,
    category: "Core Team",
  },
  {
    id: 4,
    name: "Kekeyi",
    position: "Designer",
    image: Staff4,
    category: "Public Relation",
  },
  {
    id: 5,
    name: "Ken Kentaro",
    position: "Marketing Specialist",
    image: Staff5,
    category: "Media",
  },
  {
    id: 6,
    name: "Zubaidah Prasetyo",
    position: "Sales Manager",
    image: Staff6,
    category: "Media",
  },
  {
    id: 7,
    name: "Ikbar Sari",
    position: "HR Manager",
    image: Staff7,
    category: "Media",
  },
  {
    id: 8,
    name: "Ria Wijaya",
    position: "IT Support",
    image: Staff8,
    category: "Media",
  },
  {
    id: 3,
    name: "Atep Rizal",
    position: "Lead Developer",
    image: Staff3,
    category: "Core Team",
  },
  {
    id: 2,
    name: "Siti Aminah",
    position: "Project Manager",
    image: Staff7,
    category: "Core Team",
  },
  {
    id: 7,
    name: "Ikbar Sari",
    position: "HR Manager",
    image: Staff7,
    category: "Media",
  },
  {
    id: 5,
    name: "Ken Kentaro",
    position: "Marketing Specialist",
    image: Staff3,
    category: "Media",
  },
  {
    id: 4,
    name: "Kekeyi",
    position: "Designer",
    image: Staff4,
    category: "Public Relation",
  },
  {
    id: 8,
    name: "Ria Wijaya",
    position: "IT Support",
    image: Staff8,
    category: "Media",
  },
  {
    id: 1,
    name: "Atep Saifullah",
    position: "Daily Chairman",
    image: Staff1,
    category: "Core Team",
  },
  {
    id: 6,
    name: "Zubaidah Prasetyo",
    position: "Sales Manager",
    image: Staff5,
    category: "Media",
  },
];

export const AboutUsOurTeam = () => {
  const { team, loading, error } = GetTeam();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activePage, setActivePage] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 8 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(team);

    if (team && team.length > 0) {
      const uniqueCategories = [
        ...new Set(team.map((member) => member.CategoryTeam.name)),
      ];
      setCategories(["Semua", ...uniqueCategories]);
    }
  }, [team]);

  const filteredStaffMembers =
    selectedCategory === "Semua"
      ? team
      : team.filter((member) => member.CategoryTeam.name === selectedCategory);

  const indexOfLastStaff = currentPage * itemsPerPage;
  const indexOfFirstStaff = indexOfLastStaff - itemsPerPage;
  const currentStaffMembers = filteredStaffMembers.slice(
    indexOfFirstStaff,
    indexOfLastStaff
  );
  const totalPages = Math.ceil(filteredStaffMembers.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setActivePage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setActivePage(currentPage - 1);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  if (loading) return <div>Loading team members...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="our-team-section flex w-full lg:w-[1224px] justify-center items-start lg:items-center mx-auto gap-2.5">
      <div className="our-team-container flex w-full py-12 flex-col items-center gap-8 flex-shrink-0">
        <div className="our-team-heading w-full px-6 lg:w-[520px] flex flex-col items-start gap-4 lg:self-stretch">
          <h5 className="text-neutral-1 text-sm lg:text-[16px] font-lato font-bold">
            OUR TEAM
          </h5>
          <h2 className="self-stretch text-neutral-1 text-2xl lg:text-[32px] font-lato font-bold">
            The Minds Behind Our Impact
          </h2>
        </div>
        <div className="our-team-ctg-and-staff lg:w-[1224px] flex flex-col items-center gap-8 xs:self-stretch">
          <div className="btn-categories lg:flex lg:items-center lg:gap-[12px] hidden ">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  handleCategoryChange({ target: { value: category } })
                }
                className={`lg:flex hidden lg:w-max w-[270px] lg:h-[32px] h-[48px] py-2 px-3 justify-between items-center rounded-md ${
                  selectedCategory === category
                    ? "bg-brand-red border-brand-red rounded-md hover:bg-brand-red-hover"
                    : "bg-white hover:bg-neutral-3-hover text-neutral-1 border-2 border-neutral-1"
                }`}
              >
                <p
                  className={` text-[14px] font-lato font-bold ${
                    selectedCategory === category
                      ? "text-white"
                      : "text-neutral-1"
                  }`}
                >
                  {category}
                </p>
              </button>
            ))}
          </div>
          <div className="dropdown relative w-full px-6 lg:hidden">
            <select
              className="flex p-3 items-start w-full px-6 rounded-md border-[1px] border-neutral-2 appearance-none"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <MdArrowDropDown
              className="absolute top-1/2 right-[37px] -translate-y-1/2 text-neutral-500 pointer-events-none"
              size={24}
            />
          </div>
          {/* Pagination */}
          <div className="our-team-btn-container w-full px-6 lg:hidden flex justify-between items-center ">
            <button
              onClick={handlePrevPage}
              className="flex p-3 justify-center items-center gap-2.5 rounded-lg bg-brand-red hover:bg-black transition-colors duration-300"
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft
                size={24}
                className="flex-shrink-0 text-white"
              />
            </button>
            <div className="numbers flex items-center gap-[32px]">
              {Array.from({ length: totalPages }, (_, index) => (
                <p
                  key={index + 1}
                  className={`text-sm font-lato font-bold cursor-pointer ${
                    currentPage === index + 1
                      ? "text-brand-red"
                      : "text-neutral-2"
                  } hover:text-brand-red`}
                  onClick={() => {
                    setCurrentPage(index + 1);
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="flex p-3 justify-center items-center gap-2.5 rounded-lg bg-brand-red hover:bg-black transition-colors duration-300"
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight
                size={24}
                className="flex-shrink-0 text-white"
              />
            </button>
          </div>
          <div className="our-team-all-staff flex flex-col items-start self-stretch">
            <div className="cards-container flex justify-center items-start content-start gap-24-48 self-stretch flex-wrap ">
              <motion.div
                key={`${selectedCategory}-${currentPage}`} // Key to trigger animation on category and page change
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Animate to visible state
                exit={{ opacity: 0, y: 20 }} // Animate out
                transition={{ duration: 0.5 }} // Animation duration
                className="flex justify-center items-start content-start gap-24-48 self-stretch flex-wrap"
              >
                {currentStaffMembers.map((staff) => (
                  <div
                    key={staff.id}
                    className="staff-card flex w-[270px] flex-col items-start gap-[12px]"
                  >
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-[270px] h-[290px]"
                    />
                    <div className="title-and-detail flex flex-col items-start gap-[4px] self-stretch">
                      <h4 className="text-neutral-1 text-[20px] font-lato font-bold">
                        {staff.name}
                      </h4>
                      <p className="text-neutral-2 text-[14px] font-lato font-normal">
                        {staff.position}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="our-team-btn-container w-[1224px] hidden lg:flex justify-between items-center ">
            <button
              onClick={handlePrevPage}
              className="flex p-3 justify-center items-center gap-2.5 rounded-lg bg-black hover:bg-neutral-2 transition-colors duration-300"
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft
                size={24}
                className="flex-shrink-0 text-white"
              />
              <p className={` text-[16px] font-lato font-bold text-white`}>
                Sebelumnya
              </p>
            </button>
            <div className="numbers flex items-center gap-[32px]">
              {Array.from({ length: totalPages }, (_, index) => (
                <p
                  key={index + 1}
                  className={`text-sm font-lato font-bold cursor-pointer ${
                    currentPage === index + 1
                      ? "text-brand-red"
                      : "text-neutral-2"
                  } hover:text-brand-red`}
                  onClick={() => {
                    setCurrentPage(index + 1);
                  }}
                >
                  {index + 1}
                </p>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="flex p-3 justify-center items-center gap-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover transition-colors duration-300"
              disabled={currentPage === totalPages}
            >
              <p className={` text-[16px] font-lato font-bold text-white`}>
                Setelahnya
              </p>
              <MdKeyboardArrowRight
                size={24}
                className="flex-shrink-0 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
