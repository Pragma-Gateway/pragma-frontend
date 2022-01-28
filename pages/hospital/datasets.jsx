import { useState } from "react";
import {
  LayoutContainer,
  ListingSection,
  SearchSection,
  TitleSection,
} from "../../components/dataPage/DataPage";
import Listing from "../../components/dataPage/Listing";
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

// page that displays past data given from that institution
const Datasets = () => {
  const [listings, setListings] = useState(listingData);

  return (
    <LayoutContainer title="Datasets">
      <TitleSection title="Datasets" subtitle="Review your data" />
      <SearchSection
        setData={setListings}
        originalData={listingData}
        options={{
          includeScore: false,
          // Search in `author` and in `tags` array
          keys: ["id", "institution", "name", "entries", "columns", "offer"],
        }}
      />
      <ListingSection listings={listings} />
    </LayoutContainer>
  );
};

export default Datasets;
