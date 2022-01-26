import { useEffect, useState } from "react";
import Fuse from "fuse.js";

import searchData from "../searchData";
import { fuseToSearchResults } from "../../helpers";

// options for the fuse.js library
const options = {
  includeScore: true,
  // Search in for these keys in the objects in the array
  keys: ["name", "description", "type"],
};
// lets you search for data to add
const SearchBar = ({ setSearchResults }) => {
  const [search, setSearch] = useState("");
  const fuse = new Fuse(searchData, options);
  // TODO: loadsh debouce this for anti spam
  useEffect(() => {
    if (search) {
      let result = fuse.search(search);
      result = fuseToSearchResults(result);
      setSearchResults(result);
    }
  }, [search]);
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
