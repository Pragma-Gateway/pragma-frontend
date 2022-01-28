import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { GetYourSubmissions } from "../../components/helpers";
import { useAuth } from "../../contexts/authContext";
import Navbar from "../../components/navbar/Index";
import { getEMRData } from "../../components/helpers";
import {
  LayoutContainer,
  TitleSection,
} from "../../components/dataPage/DataPage";

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

export const EMRpage = () => {
  const [token] = useAuth();
  const router = useRouter();

  // EMR data state

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [notes, setNotes] = useState();
  const [dateOfPrevVisit, setDateOfPrevVisit] = useState();

  const submitEMRData = async () => {
    const body = {
      data: { name, age, weight, height, notes, dateOfPrevVisit },
    };
    const { data } = await axios.post("/emr/create", body, {
      headers: { user_auth_token: token },
    });
    toast.success("Sucessfully updated patient record");
  };

  useEffect(() => {
    if (token) {
      getEMRData(token).then((data) => {
        const {
          name: Name,
          age: Age,
          weight: Weight,
          height: Height,
          notes: Notes,
          dateOfPrevVisit: DateOfPrevVisit,
        } = data;
        setName(Name);
        setAge(Age);
        setWeight(Weight);
        setHeight(Height);
        setNotes(Notes);
        setDateOfPrevVisit(DateOfPrevVisit);
      });
    } else router.push("/login");
  }, [token, router]);

  return (
    <LayoutContainer title="New entry">
      <TitleSection
        title="Electronic Patient Medical Record"
        subtitle="Add New data entries to your dataset"
      />
      <div className="form-wrapper w-full h-full emr-wrapper">
        <div>
          <label>Name</label>
          <input
            value={name}
            className="input-outlined"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            value={age}
            className="input-outlined"
            type="text"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            value={weight}
            className="input-outlined"
            type="text"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (cm)</label>
          <input
            value={height}
            className="input-outlined"
            type="text"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Notes</label>
          <textarea
            value={notes}
            className="input-outlined"
            type="text"
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Previous Visit</label>
          <input
            value={dateOfPrevVisit}
            className="input-outlined"
            type="date"
            onChange={(e) => setDateOfPrevVisit(e.target.value)}
          />
        </div>
        <button className="btn-filled" onClick={submitEMRData}>
          Submit
        </button>

      </div>
    </LayoutContainer>
  );
};

export default EMRpage;
