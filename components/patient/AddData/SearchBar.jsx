import { useState } from "react";

// lets you search for data to add
const SearchBar = ({ name }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center p-2 duration-300 transform border rounded shadow scale-105 sm:scale-110">
      <div className="mr-2">
        <img
          className="w-4 h-4"
          alt="search image"
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-seo-dreamstale-lineal-dreamstale-7.png"
        />
      </div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-gray-800 w-full focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
