import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const Colors = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={1}
      >
        <Typography variant={"h6"}>Main background</Typography>
        <Box
          sx={{ background: "red" }}
          width={50}
          height={50}
          borderRadius={"50%"}
        ></Box>
      </Grid>
      <Grid
        item
        xs={4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={1}
      >
        <Typography variant={"h6"}>Light background</Typography>
        <Box
          sx={{ background: "red" }}
          width={50}
          height={50}
          borderRadius={"50%"}
        ></Box>
      </Grid>
      <Grid
        item
        xs={4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={1}
      >
        <Typography variant={"h6"}>Dark background</Typography>
        <Box
          sx={{ background: "red" }}
          width={50}
          height={50}
          borderRadius={"50%"}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Colors;
