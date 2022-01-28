import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import { useAuth } from "../../contexts/authContext";
import { AiOutlineClose } from "react-icons/ai";
import useAuthRedirect from "../../components/hooks/useAuthRedirect";
import { getDatasetPageData } from "../../components/helpers";

const DatasetPage = () => {
  const token = useAuthRedirect();
  const [datasets, setDatasets] = useState([]);

  const [query, setQuery] = useState("");
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (token) {
      getDatasetPageData({ token }).then((data) => setDatasets(data));
    }
  }, [token]);

  return (
    <div className="main-wrapper-dataset">
      <div className="main-data-page">
        <DatasetViewer Query={query} datasets={datasets} />
      </div>

      {closed || (
        <CreateDSpopup
          datasets={datasets}
          setDatasets={setDatasets}
          closeForm={() => setClosed(!closed)}
        />
      )}
    </div>
  );
};

const DatasetViewer = ({ datasets, Query }) => {
  if (datasets && Query)
    datasets = datasets.filter((d) => {
      console.log(d.name.toLowerCase(), Query.toLowerCase());
      return d.name.toLowerCase().includes(Query.toLowerCase());
    });
  return (
    <div className="dataset-container">
      {datasets && datasets.map((d) => <DSCard key={d.name} dataset={d} />)}
    </div>
  );
};

const DSCard = ({ dataset }) => {
  const { name, fields, _id, description } = dataset;
  return (
    <div className="ds-wrapper">
      <h3>{name}</h3>
      <div className="fields">
        {fields && fields.map((f) => <span>{f}</span>)}
      </div>
      <br></br>
      <Link href={`/datasets/${_id}`}>View Dataset</Link>
    </div>
  );
};

const Databar = ({ onQueryChange, Query, onNew }) => {
  return (
    <div className="databar">
      <input
        className="input-outlined"
        value={Query}
        type="text"
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search for dataset..."
      />
      <button className="btn-filled" onClick={onNew}>
        Create New +
      </button>
    </div>
  );
};

const CreateDSpopup = ({ datasets, setDatasets, closeForm }) => {
  const [token, setToken] = useAuth();
  const router = useRouter();
  const [name, setName] = useState();
  const [fields, setFields] = useState([]);
  const [datapoints, setDatapoints] = useState(0);
  const [description, setDescription] = useState("");
  const [organization, setOrg] = useState("");

  const submitForm = async () => {
    const body = { name, fields, datapoints, description, organization };
    console.log(body);
    const headers = { headers: { user_auth_token: token } };
    const { data } = await axios.post("/database/create", body, headers);
    setDatasets([...datasets, data]);
    toast.success("Dataset Created");
    closeForm();
  };
  return (
    <div className="create-form-wrapper">
      <AiOutlineClose onClick={closeForm}>Close</AiOutlineClose>
      <div className="form-wrapper">
        <div>
          <label>Name of institution</label>
          <input
            className="input-outlined"
            type="text"
            onChange={(e) => setOrg(e.target.value)}
          />
        </div>
<<<<<<< HEAD
        <div>
          <label>Name of Dataset</label>
          <input
            className="input-outlined"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
=======
        </React.Fragment>
    )
}


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link href = "/datasets/me">Your Contributions</Link>
>>>>>>> 659eacae2f0e2302528882215dc6e4f34c3a8202
        </div>
        <div>
          <label>Fields/Datapoints (Comma-separated)</label>
          <input
            className="input-outlined"
            type="text"
            onChange={(e) => setFields(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Number of Entries</label>
          <input
            value={datapoints}
            className="input-outlined"
            type="number"
            onChange={(e) => setDatapoints(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            className="input-outlined"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn-filled" onClick={submitForm}>
          Create Dataset
        </button>
      </div>
    </div>
  );
};

const DatasetCard = () => {
  null;
};

export default DatasetPage;
