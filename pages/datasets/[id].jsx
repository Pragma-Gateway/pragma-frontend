import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";
const DatasetPage = () => {
  const router = useRouter();
  const [dataset, setDataset] = useState({});
  const [token, setToken] = useAuth();

  const joinDB = async () => {
    const { id } = router.query;
    const { data } = await axios
      .post("/database/add/" + id, {}, { headers: { user_auth_token: token } })
      .catch((err) => toast.error("There was an error"));
    toast.success("Added Patient to Dataset");
    router.push("/");
  };

  const getDataset = async () => {
    const { id } = router.query;
    const { data } = await axios.get("/database/" + id, {
      headers: { user_auth_token: token },
    });
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (!token) router.push("/login");
    getDataset().then((d) => setDataset(d));
  }, [token]);

  if (!dataset) return <div></div>;
  const { name, fields, datapoints, description, organization } = dataset;
  return (
    <div className="main-wrapper">
      <div className="ds-page-wrapper">
        <h2>{name}</h2>
        <p>{organization}</p>
        <br></br>
        <div>
          Tags: {fields && fields.map((f) => <span key = {f} className="blob">{f}</span>)}
        </div>
        <br></br>
        <br></br>
        <h3>Description</h3>
        <p>{description}</p>
        <br></br>
        <br></br>
        <button className="btn-filled" onClick={joinDB}>
          Add Patient to Database
        </button>
      </div>
    </div>
  );
};

export default DatasetPage;
