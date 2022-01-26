// an entry in the table
const Entry = ({ name, type, value, description, removeEntry }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:mr-4">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            className="w-12 h-12 text-deep-purple-accent-400"
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
        </div>
      </div>
      <div>
        <h6 className="mb-2 font-semibold leading-5">{name}</h6>
        <p className="mb-3 text-sm text-gray-900">{description}</p>
        <ul className="mb-4 -ml-1 space-y-2">
          <li className="flex items-start">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            {type}
          </li>
          <li className="flex items-start">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            {value}
          </li>
        </ul>
        <p
          onClick={() => removeEntry(name)}
          className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-red-800 cursor-pointer"
        >
          Remove Item
        </p>
      </div>
    </div>
  );
};

// this shows the current data in the data array
const CurrentData = ({ data, setData }) => {
  const removeEntry = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        {data.map((entry, index) => (
          <Entry
            key={index}
            index={index}
            removeEntry={removeEntry}
            {...entry}
          />
        ))}
      </div>
    </div>
  );
};
export default CurrentData;
