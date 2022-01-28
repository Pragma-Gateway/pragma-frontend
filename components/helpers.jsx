import axios from "axios"

// turns the returned fuse object into the format it was inputted as
export const fuseToSearchResults = (result) => {
  return result.map((item) => {
    return item.item;
  });
};


export const getEMRData = async (token) => {
  const { data } = await axios.get("/emr", {headers: { user_auth_token: token }})
  return data.data
}

export const getContributions = async (token) => {
  const { data } = await axios.get("/contributions", {headers: { user_auth_token: token }})
  return data.databaseContributions
}

