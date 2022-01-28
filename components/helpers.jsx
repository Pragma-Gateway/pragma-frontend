import axios from "axios";

// turns the returned fuse object into the format it was inputted as
export const fuseToSearchResults = (result) => {
  return result.map((item) => {
    return item.item;
  });
};

export const getDatasetPageData = async ({ token }) => {
  const { data } = await axios
    .get("/database", { headers: { user_auth_token: token } })
    .catch((err) => toast.error("There was an error fetching datasets"));
  console.log(data);
  return data;
};

export const getEMRData = async (token) => {
  const { data } = await axios.get("/emr", {
    headers: { user_auth_token: token },
  });
  return data.data;
};

export const getContributions = async (token) => {
  const { data } = await axios.get("/contributions", {
    headers: { user_auth_token: token },
  });
  return data.databaseContributions;
};

// changes backend data to match the format of the data page
export const DatasetFrontendSchema = ({ item }) => {
  let returnObj = {};
  returnObj.id = item?._id;
  returnObj.institution = item?.institution;
  returnObj.name = item?.name;
  returnObj.entries = item?.datapoints;
  returnObj.columns = item?.fields?.length;
  returnObj.fields = item?.fields;
  returnObj.price = item?.offer;
  returnObj.description = item?.description;
  return returnObj;
};

export const GetYourSubmissions = async (token) => {
  const { data } = await axios.get("/database/info", {headers: {user_auth_token: token}})
  const cleaned = []
  for (let i of data) {
    cleaned.push(data[0])
  }
  return cleaned
}