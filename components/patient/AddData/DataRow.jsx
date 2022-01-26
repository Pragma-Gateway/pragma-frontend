import { useState } from "react";

// the rows that appears on the data list
const DataRow = ({ name, defaultValue, setData, data, datapoint }) => {
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div
      className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110 cursor-pointer"
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
            onClick={() => {
              setData([...data, { ...datapoint, value }]);
              setClicked(false);
              setValue(defaultValue);
            }}
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

export default DataRow;
