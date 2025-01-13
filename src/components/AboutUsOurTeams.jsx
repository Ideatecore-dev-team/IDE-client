// eslint-disable-next-line no-unused-vars  
import React, { useState, useEffect } from "react";  
import { MdArrowDropDown } from "react-icons/md";  
import { MdKeyboardArrowLeft } from "react-icons/md";  
import { MdKeyboardArrowRight } from "react-icons/md";  
import Staff1 from "../assets/images/staff-1.png";  
import Staff2 from "../assets/images/staff-2.png";   
import Staff3 from "../assets/images/staff-3.png";  
import Staff4 from "../assets/images/staff-4.png";   
import Staff5 from "../assets/images/staff-5.png";   
import Staff6 from "../assets/images/staff-6.png";   
import Staff7 from "../assets/images/staff-7.png";   
import Staff8 from "../assets/images/staff-8.png";   

const staffMembers = [  
    {  
        id: 1,  
        name: "Atep Saifullah",  
        position: "Daily Chairman",  
        image: Staff1,  
        category: "Core Team"  
    },  
    {  
        id: 2,  
        name: "Siti Aminah",  
        position: "Project Manager",  
        image: Staff2,  
        category: "Core Team"  
    },  
    {  
        id: 3,  
        name: "Atep Rizal",  
        position: "Lead Developer",  
        image: Staff3,  
        category: "Core Team"  
    },  
    {  
        id: 4,  
        name: "Kekeyi",  
        position: "Designer",  
        image: Staff4,  
        category: "Public Relation"  
    },  
    {  
        id: 5,  
        name: "Ken Kentaro",  
        position: "Marketing Specialist",  
        image: Staff5,  
        category: "Public Relation"  
    },  
    {  
        id: 6,  
        name: "Zubaidah Prasetyo",  
        position: "Sales Manager",  
        image: Staff6,  
        category: "Media"  
    },  
    {  
        id: 7,  
        name: "Ikbar Sari",  
        position: "HR Manager",  
        image: Staff7,  
        category: "Media"  
    },  
    {  
        id: 8,  
        name: "Ria Wijaya",  
        position: "IT Support",  
        image: Staff8,  
        category: "Media"  
    },  
    {  
        id: 9,  
        name: "Atep Saifullah",  
        position: "Daily Chairman",  
        image: Staff1,  
        category: "Core Team"  
    },  
    {  
        id: 10,  
        name: "Siti Aminah",  
        position: "Project Manager",  
        image: Staff2,  
        category: "Core Team"  
    },  
    {  
        id: 11,  
        name: "Atep Rizal",  
        position: "Lead Developer",  
        image: Staff7,  
        category: "Core Team"  
    },  
    {  
        id: 12,  
        name: "Kekeyi",  
        position: "Designer",  
        image: Staff6,  
        category: "Public Relation"  
    },  
    {  
        id: 13,  
        name: "Ken Kentaro",  
        position: "Marketing Specialist",  
        image: Staff5,  
        category: "Public Relation"  
    },  
    {  
        id: 14,  
        name: "Zubaidah Prasetyo",  
        position: "Sales Manager",  
        image: Staff4,  
        category: "Media"  
    },  
    {  
        id: 15,  
        name: "Ikbar Sari",  
        position: "HR Manager",  
        image: Staff3,  
        category: "Media"  
    },  
    {  
        id: 16,  
        name: "Ria Wijaya",  
        position: "IT Support",  
        image: Staff8,  
        category: "Media"  
    },  
];  

export const AboutUsOurTeam = () => {  
    const [currentPage, setCurrentPage] = useState(1);  
    const [itemsPerPage, setItemsPerPage] = useState(4);   
    const [loading, setLoading] = useState(false);  
    const [selectedCategory, setSelectedCategory] = useState("Semua"); // State for selected category  
    const [activePage, setActivePage] = useState(1); // State to track active pagination number  
    const [categories, setCategories] = useState([]); // State to store unique categories  

    useEffect(() => {  
        const handleResize = () => {  
            setItemsPerPage(window.innerWidth >= 1024 ? 8 : 4); // Set items per page based on screen size  
        };  

        handleResize();   
        window.addEventListener("resize", handleResize);   

        return () => {  
            window.removeEventListener("resize", handleResize);   
        };  
    }, []);  

    // Extract unique categories from staffMembers  
    useEffect(() => {  
        const uniqueCategories = [...new Set(staffMembers.map(staff => staff.category))];  
        setCategories(["Semua", ...uniqueCategories]); // Add "Semua" to the beginning  
    }, []);  

    // Filter staff members based on selected category  
    const filteredStaffMembers = selectedCategory === "Semua"   
        ? staffMembers   
        : staffMembers.filter(staff => staff.category === selectedCategory);  

    const indexOfLastStaff = currentPage * itemsPerPage;  
    const indexOfFirstStaff = indexOfLastStaff - itemsPerPage;  
    const currentStaffMembers = filteredStaffMembers.slice(indexOfFirstStaff, indexOfLastStaff);  

    const totalPages = Math.ceil(filteredStaffMembers.length / itemsPerPage);  

    const handleNextPage = () => {  
        if (currentPage < totalPages) {  
            setCurrentPage(currentPage + 1);  
            setActivePage(currentPage + 1); // Update active page  
        }  
    };  

    const handlePrevPage = () => {  
        if (currentPage > 1) {  
            setCurrentPage(currentPage - 1);  
            setActivePage(currentPage - 1); // Update active page  
        }  
    };  

    const handleCategoryChange = (e) => {  
        setLoading(true);  
        setSelectedCategory(e.target.value);  
        setCurrentPage(1);  
        setTimeout(() => {  
            setLoading(false);  
        }, 500);  
    };  
    return (  
        <div className="our-team-section flex w-full lg:w-[1224px] justify-center items-start lg:items-center mx-auto gap-2.5">  
            <div className="our-team-container flex w-full py-12 flex-col items-center gap-8 flex-shrink-0">  
                <div className="our-team-heading w-[327px] lg:w-[520px] flex flex-col items-start gap-4 lg:self-stretch">  
                    <h5 className="text-neutral-1 text-sm lg:text-[16px] font-lato font-bold">OUR TEAM</h5>  
                    <h2 className="self-stretch text-neutral-1 text-2xl lg:text-[32px] font-lato font-bold">The Minds Behind Our Impact</h2>  
                </div>  
                <div className="our-team-ctg-and-staff lg:w-[1224px] flex flex-col items-center gap-8 xs:self-stretch">  
                    <div className="btn-categories lg:flex lg:items-center lg:gap-[12px] hidden ">  
                        {categories.map((category, index) => (  
                            <button  
                                key={index}  
                                onClick={() => handleCategoryChange({ target: { value: category } })}  
                                className={`lg:flex hidden lg:w-max w-[270px] lg:h-[32px] h-[48px] py-2 px-3 justify-between items-center rounded-md ${selectedCategory === category ? 'bg-brand-red border-brand-red rounded-md hover:bg-brand-red-hover' : 'bg-white hover:bg-neutral-3-hover text-neutral-1 border-2 border-neutral-1'}`}  
                            >  
                                <p className={` text-[14px] font-lato font-bold ${selectedCategory === category ? 'text-white' : 'text-neutral-1'}`}>  
                                    {category}  
                                </p>  
                            </button>  
                        ))}  
                    </div>  
                    <div className="dropdown relative w-[327px] lg:hidden">  
                        <select  
                            className="flex p-3 items-start w-full rounded-md border-[1px] border-neutral-2 appearance-none"  
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
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-500 pointer-events-none"  
                            size={24}  
                        />  
                    </div>  
                    {/* Pagination */}  
                    <div className="our-team-btn-container w-[327px] lg:hidden flex justify-between items-center ">  
                        <button  
                            onClick={handlePrevPage}  
                            className="flex p-3 justify-center items-center gap-2.5 rounded-lg bg-brand-red hover:bg-black transition-colors duration-300"  
                            disabled={currentPage === 1}  
                        >  
                            <MdKeyboardArrowLeft size={24} className="flex-shrink-0 text-white" />  
                        </button>  
                        <div className="numbers flex items-center gap-[32px]">  
                            {Array.from({ length: totalPages }, (_, index) => (  
                                <p  
                                    key={index + 1}  
                                    className={`text-sm font-lato font-bold cursor-pointer ${currentPage === index + 1 ? 'text-brand-red' : 'text-neutral-2'} hover:text-brand-red`}  
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
                            <MdKeyboardArrowRight size={24} className="flex-shrink-0 text-white" />  
                        </button>  
                    </div>  
                    {loading ? (  
                        <div className="loading-indicator flex justify-center items-center">  
                            <p className="text-neutral-1 text-lg font-lato font-bold">Loading...</p>  
                        </div>  
                    ) : (  
                        <div className="our-team-all-staff flex flex-col items-start self-stretch">  
                            <div className="cards-container flex justify-center items-start content-start gap-24-48 self-stretch flex-wrap ">  
                                {currentStaffMembers.map((staff) => (  
                                    <div key={staff.id} className="staff-card flex w-[270px] flex-col items-start gap-[12px]">  
                                        <img src={staff.image} alt={staff.name} />  
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
                            </div>  
                        </div>  
                    )}  
                    <div className="our-team-btn-container w-[1224px] hidden lg:flex justify-between items-center ">  
                        <button  
                            onClick={handlePrevPage}  
                            className="flex p-3 justify-center items-center gap-2.5 rounded-lg bg-black hover:bg-neutral-2 transition-colors duration-300"  
                            disabled={currentPage === 1}  
                        >  
                            <MdKeyboardArrowLeft size={24} className="flex-shrink-0 text-white" />  
                            <p className={` text-[16px] font-lato font-bold text-white`}>  
                                Sebelumnya  
                            </p>  
                        </button>  
                        <div className="numbers flex items-center gap-[32px]">  
                            {Array.from({ length: totalPages }, (_, index) => (  
                                <p  
                                    key={index + 1}  
                                    className={`text-sm font-lato font-bold cursor-pointer ${currentPage === index + 1 ? 'text-brand-red' : 'text-neutral-2'} hover:text-brand-red`}  
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
                            <MdKeyboardArrowRight size={24} className="flex-shrink-0 text-white" />  
                        </button>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  
