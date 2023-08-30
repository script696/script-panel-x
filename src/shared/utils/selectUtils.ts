// eslint-disable-next-line
export const selectAll = <T extends Record<string, any>>(
  list: Array<T>,
  key = "id"
) => list.map((item) => item[key]);

export const selectOne = (selected: Array<string>, id: string) => {
  const selectedIndex = selected.indexOf(id);
  let newSelected: string[] = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1)
    );
  }

  return newSelected;
};
