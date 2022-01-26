import { useState } from "react";

import searchData from "../searchData";
import CurrentData from "./CurrentData";
import DataRow from "./DataRow";
import SearchBar from "./SearchBar";

// list of possible symptoms/data the patient can input
const DataList = ({ data, setData, searchResults }) => {
  return (
    <>
      {searchResults.slice(0, 15).map((item, i) => (
        <DataRow
          key={i}
          name={item.name}
          setData={setData}
          data={data}
          datapoint={item}
        />
      ))}
    </>
  );
};

const AddData = () => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState(searchData);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Add your data
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="a0b40128-6963-4319-aeeb-471e92fa2d74"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Search</span>
          </span>{" "}
          Disease, treatments or symptoms
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Add to or update your data profile!
        </p>
      </div>
      <CurrentData data={data} setData={setData} />
      {/* data list container */}
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        <SearchBar setSearchResults={setSearchResults} />
        <DataList searchResults={searchResults} data={data} setData={setData} />
      </div>
      <p className="font-sans font-light text-center mt-4 underline cursor-pointer">
        {data.length > 0 ? "Next" : "Skip for now"}
      </p>
    </div>
  );
};

export default AddData;
