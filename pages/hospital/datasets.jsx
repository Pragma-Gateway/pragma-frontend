import { useState } from "react";
import Search from "../../components/hospital/Search";
import Layout from "../../components/Layout";

const listingData = [
  {
    institution: "TORONTO GENERAL HOSPITAL",
    name: "Diabetes Records",
    entries: 20,
    columns: 6,
    offer: 2.0,
    id: 0,
  },
  {
    institution: "Cancer Research Institute",
    name: "Glioblastoma Records",
    entries: 50,
    columns: 8,
    offer: 5.0,
    id: 1,
  },
  {
    institution: "Platlet Society",
    name: "Thrombocytopenia Records",
    entries: 100,
    columns: 15,
    offer: 2.0,
    id: 2,
  },
];

const Listing = ({ data: { institution, name, entries, columns, offer } }) => {
  return (
    <div className="grid gap-1 rounded-lg border-gray-text border-2 w-[max-content] p-4 mt-10">
      <p className="text-sm font-normal text-gray-text">{institution}</p>
      <p className="text-md font-normal text-gray-text">Name: {name}</p>
      <p className="text-sm font-normal text-gray-text">Entries: {entries}</p>
      <p className="text-sm font-normal text-gray-text">Columns: {columns}</p>
      <p className="text-sm font-normal text-gray-text">Offer: {offer} ETH</p>
      {/* opt-in button */}
      <div className="bg-gray-text p-2 px-6 w-[10rem] rounded-r-full rounded-l-full">
        <p className="text-sm font-normal text-white text-center">
          Upload to listing
        </p>
      </div>
    </div>
  );
};
// page that displays past data given from that institution
const Datasets = () => {
  const [listings, setListings] = useState(listingData);

  return (
    <Layout title="Datasets" className="ml-[20vw] mt-[8rem]">
      <div className="mt-10 grid grid-rows-[repeat(4,auto)] grid-cols-[auto] gap-2">
        <p className="text-4xl font-bold text-gray-text">Datasets</p>
        <p className="text-lg font-normal text-gray-text">
          Review your datasets
        </p>
        {/* search bar row */}
        {/* <div> */}
        {/* added div for mobile compatability (for line break with inputs) */}
        {/* search abr div */}
        <div className="flex space-x-4 pt-2">
          <p className="text-lg font-normal text-gray-text">Search</p>
          <Search
            options={{
              includeScore: true,
              // Search in `author` and in `tags` array
              keys: [
                "id",
                "institution",
                "name",
                "entries",
                "columns",
                "offer",
              ],
            }}
            setData={setListings}
            originalData={listingData}
          />
        </div>
        {/* the list of datasets */}
        <div className="grid grid-cols-dataset">
          {listings.map((listing) => (
            <Listing key={listing.id} data={listing} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Datasets;
