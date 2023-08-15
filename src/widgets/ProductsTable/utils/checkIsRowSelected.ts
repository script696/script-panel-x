export const checkIsRowSelected = (selected: Array<string>, id: string) => {
  return selected.indexOf(id) !== -1;
};
