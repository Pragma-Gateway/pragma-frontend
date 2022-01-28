import Search from "../hospital/Search";
import Layout from "../Layout";
import Listing from "./Listing";

const SearchSection = ({ setData, originalData, options }) => {
  return (
    <>
      {/* search bar row */}
      {/* added div for mobile compatability (for line break with inputs) */}
      {/* search abr div */}
      <div className="flex space-x-4 pt-2">
        <p className="text-lg font-normal text-gray-text">Search</p>
        {/* {
            includeScore: false,
            // Search in `author` and in `tags` array
            keys: ["id", "institution", "name", "entries", "columns", "offer"],
          } */}
        <Search
          options={options}
          setData={setData}
          originalData={originalData}
        />
      </div>
    </>
  );
};

const TitleSection = ({ title, subtitle }) => {
  return (
    <>
      {/* title row */}
      <p className="text-4xl font-bold text-gray-text">{title}</p>
      <p className="text-lg font-normal text-gray-text">{subtitle}</p>
    </>
  );
};

const ListingSection = ({ listings, btnName, onClick }) => {
  return (
    <>
      {/* the list of datasets */}
      <div className="grid grid-cols-dataset">
        {listings.map((listing, index) => (
          <Listing
            key={listing.id}
            data={listing}
            btnName={btnName}
            onClick={() => onClick(index)}
          />
        ))}
      </div>
    </>
  );
};

const LayoutContainer = ({ children, title }) => {
  return (
    <Layout title={title} className="ml-[20vw] mt-[8rem]">
      <div className="mt-10 grid grid-rows-[repeat(4,auto)] grid-cols-[auto] gap-2">
        {children}
      </div>
    </Layout>
  );
};

export { SearchSection, TitleSection, ListingSection, LayoutContainer };
