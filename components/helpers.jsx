// turns the returned fuse object into the format it was inputted as
export const fuseToSearchResults = (result) => {
  return result.map((item) => {
    return item.item;
  });
};
