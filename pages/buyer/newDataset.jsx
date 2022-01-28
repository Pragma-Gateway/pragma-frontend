import { useState } from "react";
import {
  LayoutContainer,
  ListingSection,
  SearchSection,
  TitleSection,
} from "../../components/dataPage/DataPage";

const hospitalList = [
  {
    institution: "TORONTO GENERAL HOSPITAL",
  },
  {
    institution: "SickKids Hospital",
  },
  {
    institution: "Mount Sinai Hospital",
  },
  {
    institution: "Mount Sinai Hospital",
  },
  {
    institution: "John Hopkins Hospital",
  },
];

const featuresList = [
  {
    name: "COPD",
  },
  {
    name: "CKD",
  },
  {
    name: "WBC",
  },
  {
    name: "Smoker",
  },
  {
    name: "Diabetes",
  },
  {
    name: "HIV",
  },
  {
    name: "Liver Disease",
  },
  {
    name: "Asthma",
  },
  {
    name: "Heart Disease",
  },
  {
    name: "Cancer",
  },
  {
    name: "Blood Pressure",
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
  const [name, setName] = useState("");
  const [offer, setOffer] = useState(0);
  const [entries, setEntries] = useState(0);
  const [hospitals, setHospitals] = useState(hospitalList);
  const [features, setFeatures] = useState(featuresList);
  const [selectedHospitals, setSelectedHospitals] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState(false);

  return (
    <LayoutContainer title="New Dataset">
      <TitleSection
        title="Create a new dataset"
        subtitle="Request a new dataset, select which boxes fit your criteria"
      />
      <InputSection name="Dataset name" setValue={setName} value={name} />
      <InputSection
        name="Offer price (ETH)"
        setValue={setOffer}
        value={offer}
      />
      <InputSection
        name="Entries per hospital"
        setValue={setEntries}
        value={entries}
      />

      <p className="text-lg font-normal text-gray-text">
        Add Institutions to collect data from, you've selected:{" "}
        {selectedHospitals
          ? selectedHospitals.map(({ institution }, index) => (
              <span
                className="hover:text-red-500 cursor-pointer"
                key={index}
                // TODO: fix this saad
                // onClick={() =>
                //   setSelectedHospitals(selectedHospitals.splice(index, 1))
                // }
              >
                {institution},
              </span>
            ))
          : "None"}{" "}
      </p>
      {/* section for adding data */}
      <SearchSection
        setData={setHospitals}
        originalData={hospitalList}
        options={{
          includeScore: false,
          // Search in `author` and in `tags` array
          keys: ["institution"],
        }}
      />
      <ListingSection
        onClick={(index) =>
          selectedHospitals
            ? setSelectedHospitals([...selectedHospitals, hospitals[index]])
            : setSelectedHospitals([hospitals[index]])
        }
        btnName="Add to list"
        listings={hospitals}
      />
      {/* section for finding features  */}
      <p className="text-lg font-normal text-gray-text">
        Add which data entries you're looking for:{" "}
        {selectedFeatures
          ? selectedFeatures.map(({ name }, index) => (
              <span
                className="hover:text-red-500 cursor-pointer"
                key={index}
                // TODO: fix this saad
                // onClick={() =>
                //   setSelectedHospitals(selectedHospitals.splice(index, 1))
                // }
              >
                {name},
              </span>
            ))
          : "None"}{" "}
      </p>
      <SearchSection
        setData={setFeatures}
        originalData={featuresList}
        options={{
          includeScore: false,
          // Search in `author` and in `tags` array
          keys: ["feature"],
        }}
      />
      <ListingSection
        onClick={(index) =>
          selectedFeatures
            ? setSelectedFeatures([...selectedFeatures, features[index]])
            : setSelectedFeatures([features[index]])
        }
        btnName="Add to list"
        listings={features}
      />
      {/* submit button */}
      <div
        className="bg-gray-text p-2 px-6 w-[10rem] rounded-r-full rounded-l-full cursor-pointer"
        onClick={() => alert("Saad, please implement this")}
      >
        <p className="text-sm font-normal text-white text-center">Submit!</p>
      </div>
    </LayoutContainer>
  );
};

export default NewDataset;
