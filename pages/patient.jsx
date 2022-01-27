import { useState } from "react";

import AddData from "../components/patient/AddData/AddData";
import IdInput from "../components/patient/IdInput";
// patient page
const Patient = () => {
  // patients unique id
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  // the current page/component the patient is seeing
  // 0 is id, 1 is data input, 2 is data portal
  const [currComp, setCurrComp] = useState(0);

  if (currComp === 0) {
    return (
      <IdInput
        id={id}
        setId={setId}
        setCurrComp={setCurrComp}
        pass={pass}
        setPass={setPass}
      />
    );
  }
  if (currComp === 1) {
    return <AddData id={id} setId={setId} setCurrComp={setCurrComp} />;
  }

  return null;
  // return components[currComp]({ id, setId, setCurrComp });
};

export default Patient;
