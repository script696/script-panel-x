import React, { FC } from "react";
import {
  Box,
  Chip,
  InputLabel,
  OutlinedInput,
  Select,
  SelectProps,
} from "@material-ui/core";
import { PRODUCT_US_SIZES } from "../../../../features/ProductEditModal/constants/constants";
import MenuItem from "@material-ui/core/MenuItem";
import { MENU_PROPS } from "../constants/constants";

type ChipSelectProps = SelectProps<Array<string>>;

const ChipSelect: FC<ChipSelectProps> = ({ onChange, value, id, label }) => {
  return (
    <>
      <InputLabel id={`${id}-label`}>Available Sizes</InputLabel>
      <Select
        fullWidth
        labelId={`${id}-label`}
        id={id}
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput id={id} label={label} name={id} />}
        renderValue={(selected) => (
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
            width={"100%"}
          >
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MENU_PROPS}
      >
        {PRODUCT_US_SIZES.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default ChipSelect;
