import { Paper, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { ElementType, FC, ReactNode } from "react";

type BotCardProps = {
  title: string;
  icon: ElementType;
  iconColor: string;
  children: ReactNode;
};

const BotCard: FC<BotCardProps> = ({ title, icon: Icon, iconColor, children }) => {
  return (
    <Paper elevation={3}>
      <Box padding={2} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={5}>
        <Typography variant={"h5"}>{title}</Typography>
        <Icon sx={{ fill: iconColor, width: "80px", height: "80px" }} />
        {children}
      </Box>
    </Paper>
  );
};

export default BotCard;
