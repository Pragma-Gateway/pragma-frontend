import { useState } from "react";

import AddData from "../components/patient/AddData/AddData";
import IdInput from "../components/patient/IdInput";
// patient page
const Patient = () => {
  // patients unique id
  const [id, setId] = useState("");
  // the current page/component the patient is seeing
  // 0 is id, 1 is data input, 2 is data portal
  const [currComp, setCurrComp] = useState(0);
  // array of the components in order
  const components = [IdInput, AddData];

  if (currComp === 0) {
    return <IdInput id={id} setId={setId} setCurrComp={setCurrComp} />;
  }
  if (currComp === 1) {
    return <AddData id={id} setId={setId} setCurrComp={setCurrComp} />;
  }

  // return components[currComp]({ id, setId, setCurrComp });
};

export default Patient;
