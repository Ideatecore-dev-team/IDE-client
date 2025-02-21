// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { MdClose, MdArrowDropDown } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ArticlesContext } from "../../context/ArticlesContext";

// eslint-disable-next-line react/prop-types
export const ButtonPopCategory = ({ onClose }) => {
  const {
    categories = [],
    selectedCategory,
    selectedSort,
    dispatch,
  } = useContext(ArticlesContext);

  const [tempCategory, setTempCategory] = useState(selectedCategory || "");
  const [tempSort, setTempSort] = useState(selectedSort);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setTempCategory(categoryId);
  };

  const handleSortChange = (sortType) => {
    setTempSort(sortType);
  };

  const handleSaveFilter = () => {
    dispatch({
      type: "APPLY_FILTERS",
      payload: {
        categoryId: tempCategory,
        selectedSort: tempSort,
      },
    });

    onClose();
  };

  const handleRemoveCategory = () => {
    setTempCategory("");
  };

  return (
    <div className="filter-pop flex w-[506px] xs:w-[393px] p-4 flex-col items-start absolute bg-white text-neutral-2 shadow-lg rounded-lg border border-solid">
      <div className="pop-header flex justify-between w-full items-center mb-4">
        <p className="text-base font-bold">Kategori</p>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </div>

      {/* Dropdown Categories */}
      <div className="filter-dropdown relative w-full flex items-center mb-4">
        <select
          className="flex p-3 items-start w-full px-6 rounded-md border-[1px] border-neutral-2 appearance-none"
          value={tempCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Semua Kategori</option>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))
          ) : (
            <option disabled>Loading categories...</option>
          )}
        </select>
        <MdArrowDropDown
          className="absolute top-1/2 right-[16px] -translate-y-1/2 text-neutral-500 pointer-events-none"
          size={24}
        />
      </div>

      {/* Filter Sorting */}
      <div className="filter-categories flex flex-col items-start gap-3 mb-4">
        <p className="text-base font-bold">Filter</p>
        <div className="categories-button flex gap-2">
          <button
            className={`flex px-3 py-[6px] justify-center items-center rounded-[25px] ${
              tempSort === "newest"
                ? "bg-brand-red text-white"
                : "bg-neutral-white-2 hover:bg-gray-200"
            }`}
            onClick={() => handleSortChange("newest")}
          >
            Terbaru
          </button>
          <button
            className={`flex px-3 py-[6px] justify-center items-center rounded-[25px] ${
              tempSort === "oldest"
                ? "bg-brand-red text-white"
                : "bg-neutral-white-2 hover:bg-gray-200"
            }`}
            onClick={() => handleSortChange("oldest")}
          >
            Terlama
          </button>
        </div>
      </div>

      {tempCategory && (
        <div className="selected bg-[#FF8D8D] py-1 px-3 justify-center items-center flex gap-[10px] text-white font-bold rounded-md">
          <p>
            {categories.find((c) => c.id === tempCategory)?.category ||
              tempCategory}
          </p>
          <button onClick={handleRemoveCategory}>
            <IoMdCloseCircleOutline />
          </button>
        </div>
      )}

      <button
        className="bg-brand-red w-full text-white font-bold py-2 rounded-md hover:bg-brand-red-hover mt-4"
        onClick={handleSaveFilter}
      >
        Simpan Filter
      </button>
    </div>
  );
};
