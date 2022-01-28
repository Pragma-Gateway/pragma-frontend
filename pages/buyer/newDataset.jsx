import { useState } from "react";
import {
  LayoutContainer,
  ListingSection,
  SearchSection,
  TitleSection,
} from "../../components/dataPage/DataPage";

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

const InputSection = ({ value, setValue, name }) => {
  return (
    <div className="flex space-x-4 pt-2">
      <p className="text-lg font-normal text-gray-text">{name}</p>
      <input
        className="rounded border-gray-text border-2 focus:border-gray-text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
    </div>
  );
};

// page that displays past data given from that institution
const NewDataset = () => {
  // const [listings, setListings] = useState(listingData);
  // const [listings, setListings] = useState(listingData);
  const [name, setName] = useState("");

  return (
    <LayoutContainer title="New Dataset">
      <TitleSection
        title="Create a new dataset"
        subtitle="Request a new dataset, select which boxes fit your criteria"
      />
      {/* section for adding data
      <SearchSection
        setData={setListings}
        originalData={listingData}
        options={{
          includeScore: false,
          // Search in `author` and in `tags` array
          keys: ["id", "institution", "name", "entries", "columns", "offer"],
        }}
      /> */}
      <InputSection name="Dataset name" setValue={setName} value={name} />
      <InputSection name="Dataset name" setValue={setName} value={name} />
      {/* <ListingSection listings={listings} /> */}
    </LayoutContainer>
  );
};

export default NewDataset;
