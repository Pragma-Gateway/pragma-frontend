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

export default Listing;
