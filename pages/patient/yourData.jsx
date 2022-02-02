import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  LayoutContainer,
  SearchSection,
  TitleSection,
} from "../../components/dataPage/DataPage";
import Listing from "../../components/dataPage/Listing";
import Graph from "../../components/Graph";
import { useAuth } from "../../contexts/authContext";

const listingData = [
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
  {
    _id: "61f4442a14bb9b96e2339dd9",
    data: {
      name: "saad",
      age: "18",
      weight: "351256",
      height: "6546851",
      notes: "These are my EMR notes",
      dateOfPrevVisit: "2022-01-06",
    },
    owner: "61f42971cda8ea649cd3ca23",
    __v: 0,
  },
];

const DataListingSection = ({ listings, btnName, onClick }) => {
  const router = useRouter();
  return (
    <>
      {/* the list of datasets */}
      <div className="grid grid-cols-dataset">
        {listings.map(
          (listing, index) =>
            console.log({ listing, data: listing.data }) || (
              <Listing
                key={listing.id}
                data={{
                  name: listing.data.name,
                  entries: listing.data.notes.substring(0, 30),
                }}
                btnName="View Entry"
                // onClick={() => onClick(index)}
                onClick={() =>
                  router.push({
                    pathname: `/datasets/entry`,
                    query: { data: JSON.stringify(listing.data) },
                  })
                }
              />
            )
        )}
      </div>
    </>
  );
};

// page where buyers list of requests are displayed (active and inactive)
const YourData = () => {
  // const [listings, setListings] = useState(listingData);
  const router = useRouter();
  const [token] = useAuth();
  const [originalDataset, setOriginalDataset] = useState([]);
  const [datasets, setDatasets] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  // useEffect(() => {
  //   if (token) {
  //     // getDatasetPageData({ token }).then((data) => {
  //     //   const newData = data.map((item) => DatasetFrontendSchema({ item }));
  //     //   setDatasets(newData);
  //     //   setOriginalDataset(newData);
  //     // });
  //     setOriginalDataset(listingData);
  //     setDatasets(listingData);
  //   } else {
  //     router.push("/login");
  //   }
  // }, [token, router]);

  return (
    // <LayoutContainer title="Your Data">
    //   <TitleSection title="Your Data" subtitle="Your data entries" />
    // {/* <SearchSection
    //   setData={setDatasets}
    //   originalData={originalDataset}
    //   options={{
    //     includeScore: false,
    //     keys: ["name", "age", "weight", "height", "notes", "dateOfPrevVisit"],
    //   }}
    // /> */}
    // {loaded && <Graph />}
    // <DataListingSection listings={datasets} />
    // </LayoutContainer>
    <Graph />
  );
};

export default YourData;
