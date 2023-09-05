import { Grid, IconButton, Typography } from "@material-ui/core";
import BrushIcon from "@material-ui/icons/Brush";
import React, { ReactNode } from "react";

type EditableRowProps = {
  title: string;
  children: ReactNode;
  onEdit: () => void;
};

const EditableRow = ({ children, title, onEdit }: EditableRowProps) => {
  return (
    <Grid container>
      <Grid item xs={12} display={"flex"} columnGap={3} alignItems={"center"}>
        <IconButton onClick={onEdit}>
          <BrushIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
        <Typography variant={"h4"} align={"center"}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} paddingLeft={5} paddingTop={1}>
        {children}
      </Grid>
    </Grid>
  );
};

export default EditableRow;
