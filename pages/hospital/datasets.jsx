import Layout from "../../components/Layout";

const Listing = () => {
  return (
    <div className="grid gap-1 rounded-lg border-gray-text border-2 w-[max-content] p-4 mt-10">
      <p className="text-sm font-normal text-gray-text">
        TORONTO GENERAL HOSPITAL
      </p>
      <p className="text-md font-normal text-gray-text">
        Name: Diabetes Records
      </p>
      <p className="text-sm font-normal text-gray-text">Entries: 20</p>
      <p className="text-sm font-normal text-gray-text">Columns: 6</p>
      <p className="text-sm font-normal text-gray-text">Offer: 2.0 ETH</p>
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
          <input
            className="rounded border-gray-text border-2 focus:border-gray-text"
            type="text"
          />
        </div>
        {/* filter div */}
        {/* removed the filter for ease of implementation */}
        {/* <div>
            <p className="text-lg font-normal text-gray-text">filter</p>
            <input className="rounded border-gray-text border-2" type="text" />
          </div> */}
        {/* </div> */}
        {/* the list of datasets */}
        <div className="grid grid-cols-dataset">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </div>
    </Layout>
  );
};

export default Datasets;
