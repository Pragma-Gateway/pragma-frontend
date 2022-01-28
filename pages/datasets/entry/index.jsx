import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/authContext";
import {
  LayoutContainer,
  TitleSection,
} from "../../../components/dataPage/DataPage";

// import { useAuth } from "../../contexts/authContext";
// import {
//   LayoutContainer,
//   TitleSection,
// } from "../../components/dataPage/DataPage";

// page where buyers list of requests are displayed (active and inactive)

//   return (
//     <LayoutContainer title="Requests">
//       <TitleSection title="Data Requests" subtitle="Review your data" />
//       {console.log({ datasets, token })}
//       <SearchSection
//         setData={setDatasets}
//         originalData={originalDataset}
//         options={{
//           includeScore: false,
//           // Search in `author` and in `tags` array
//           keys: ["id", "institution", "name", "entries", "columns", "offer"],
//         }}
//       />
//       <ListingSection btnName="View Dataset" listings={datasets} />
//     </LayoutContainer>
//   );
// };

export const EntryListing = () => {
  const [token] = useAuth();
  const router = useRouter();
  const { name, age, weight, height, notes, dateOfPrevVisit } = JSON.parse(
    router.query.data
  );

  // const submitEMRData = async ({data}) => {
  //   const body = {
  //     data: { name, age, weight, height, notes, dateOfPrevVisit },
  //   };
  //   const { data } = await axios.post("/emr/create", body, {
  //     headers: { user_auth_token: token },
  //   });
  //   toast.success("Sucessfully updated patient record");
  // };

  // useEffect(() => {
  //   if (token) {
  //     getEMRData(token).then((data) => {
  //       const {
  //         name: Name,
  //         age: Age,
  //         weight: Weight,
  //         height: Height,
  //         notes: Notes,
  //         dateOfPrevVisit: DateOfPrevVisit,
  //       } = data;
  //       setName(Name);
  //       setAge(Age);
  //       setWeight(Weight);
  //       setHeight(Height);
  //       setNotes(Notes);
  //       setDateOfPrevVisit(DateOfPrevVisit);
  //     });
  //   } else router.push("/login");
  // }, [token]);

  return (
    <LayoutContainer title="New entry">
      <TitleSection
        title="Data entry"
        subtitle="View information from that data entry"
      />
      <div className="form-wrapper w-full h-full emr-wrapper">
        <div>
          <label>Name: </label>
          <p>{name}</p>
        </div>
        <div>
          <label>Age: </label>
          <p>{age}</p>
        </div>
        <div>
          <label>Weight: </label>
          <p>{weight}</p>
        </div>
        <div>
          <label>Height (cm): </label>
          <p>{height}</p>
        </div>
        <div>
          <label>Notes: </label>
          <p>{notes}</p>
        </div>
        <div>
          <label>Date of Previous Visit: </label>
          <p>{dateOfPrevVisit}</p>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default EntryListing;
