import { useState } from "react";
import searchData from "./searchData";

// the rows that appears on the data list
const DataRow = ({ name, defaultValue, setData, ...rest, data }) => {
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div
      className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
      onClick={() => setClicked(true)}
    >
      <div className="mr-2">
        {/* if clicked make the icon the add icon */}

        {clicked ? (
          // the add button
          // adds the entry to the data list
          <img
            className="w-4 h-4 cursor-pointer"
            src="https://img.icons8.com/android/24/000000/plus.png"
            onClick={() => setData([...data, { name, value }])}
          />
        ) : (
          <svg
            className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        )}
      </div>
      <span className="text-gray-800">{name}</span>
      {/* if clicked, give them the option to enter data */}
      {clicked && (
        <div className="ml-4">
          <span>Value:</span>{" "}
          <input
            placeholder="set value here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-1/2"
          />
        </div>
      )}
    </div>
  );
};
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

// list of possible symptoms/data the patient can input
const DataList = ({ data, setData }) => {
  return (
    <>
      {searchData.map((item, i) => (
        <DataRow key={i} name={item.name} setData={setData} data={data} />
      ))}
    </>
  );
};

const AddData = () => {
  const [data, setData] = useState([]);
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
      {/* data list container */}
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        <SearchBar />
        <DataList data={data} setData={setData} />
      </div>
      <p className="font-sans font-light text-center mt-4 underline cursor-pointer">
        {data.length > 0 ? "Next" : "Skip for now"}
      </p>
    </div>
  );
};

export default AddData;
