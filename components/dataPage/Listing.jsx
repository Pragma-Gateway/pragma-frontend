const Listing = ({
  data: { institution, name, entries, columns, offer },
  btnName,
  onClick,
}) => {
  return (
    <div className="grid gap-1 rounded-lg border-gray-text border-2 w-[max-content] p-4 mt-10">
      <p className="text-sm font-normal text-gray-text">{institution}</p>
      {name && (
        <p className="text-md font-normal text-gray-text">Name: {name}</p>
      )}
      {entries && (
        <p className="text-sm font-normal text-gray-text">Entries: {entries}</p>
      )}
      {columns && (
        <p className="text-sm font-normal text-gray-text">Columns: {columns}</p>
      )}
      {offer && (
        <p className="text-sm font-normal text-gray-text">Offer: {offer} ETH</p>
      )}
      {/* opt-in button */}
      <div
        className="bg-gray-text p-2 px-6 w-[10rem] rounded-r-full rounded-l-full cursor-pointer"
        onClick={onClick}
      >
        <p className="text-sm font-normal text-white text-center">
          {btnName ? btnName : "Upload to listing"}
        </p>
      </div>
    </div>
  );
};

export default Listing;
