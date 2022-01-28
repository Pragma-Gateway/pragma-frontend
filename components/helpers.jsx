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
