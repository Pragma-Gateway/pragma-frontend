import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  LayoutContainer,
  ListingSection,
  SearchSection,
  TitleSection,
} from "../../components/dataPage/DataPage";
import {
  DatasetFrontendSchema,
  getDatasetPageData,
} from "../../components/helpers";
import { useAuthRedirect } from "../../components/hooks/useAuthRedirect";
import { useAuth } from "../../contexts/authContext";

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

// page where buyers list of requests are displayed (active and inactive)
const Requests = () => {
  // const [listings, setListings] = useState(listingData);
  const router = useRouter();
  const [token] = useAuth();
  const [originalDataset, setOriginalDataset] = useState([]);
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    if (token) {
      getDatasetPageData({ token }).then((data) => {
        const newData = data.map((item) => DatasetFrontendSchema({ item }));
        setDatasets(newData);
        setOriginalDataset(newData);
      });
    } else {
      router.push("/login");
    }
  }, [token]);

  return (
    <LayoutContainer title="Requests">
      <TitleSection title="Data Requests" subtitle="Review your data" />
      {console.log({ datasets, token })}
      <SearchSection
        setData={setDatasets}
        originalData={originalDataset}
        options={{
          includeScore: false,
          // Search in `author` and in `tags` array
          keys: ["id", "institution", "name", "entries", "columns", "offer"],
        }}
      />
      <ListingSection btnName="View Dataset" listings={datasets} />
    </LayoutContainer>
  );
};

export default Requests;
