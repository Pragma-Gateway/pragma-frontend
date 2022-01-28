import { useEffect, useState } from "react";
import Fuse from "fuse.js";

import { fuseToSearchResults } from "../helpers";

// const options = {
//   includeScore: true,
//   // Search in `author` and in `tags` array
//   keys: ['author', 'tags']
// }

/**
 * @param {object} options - options are like above, contains the keys to search in for the fuse algorithm
 * @param {function} setData - changes the data the parent component uses to display the results
 * @param {array} originalData - is the unfiltered data
 */
const Search = ({ options, setData, originalData }) => {
  // search value
  const [value, setValue] = useState("");
  // fuse object with the not filtered data
  const fuse = new Fuse(originalData, options);

  useEffect(() => {
    if (value) {
      const result = fuse.search(value);
      setData(fuseToSearchResults(result));
    }
  }, [value]);

  return (
    <input
      className="rounded border-gray-text border-2 focus:border-gray-text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );
};

export default Search;
