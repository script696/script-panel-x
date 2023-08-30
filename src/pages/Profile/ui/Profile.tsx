import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import { useAppDispatch, useAppSelector } from "app/store";
import { logoutThunk } from "app/store/reducers/auth/authThunk";
import { useNavigate } from "react-router-dom";
import { ROUTES_BASE } from "app/routing";
import { Typography } from "@material-ui/core";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.userReducer);

  const { nikName, role } = user || {};

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate(ROUTES_BASE.LOGIN);
  };

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar>
          <Fab
            aria-label="logout"
            color="secondary"
            disabled={false}
            onClick={handleLogout}
          >
            <ExitToAppIcon />
          </Fab>
        </AdminToolbar>
      </AdminAppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "background.paper",
            mb: 3,
            height: 160,
            width: 160,
          }}
        >
          <PersonIcon sx={{ fontSize: 120 }} />
        </Avatar>
        <Typography component="div" variant="h4">
          {nikName}
        </Typography>
        <Typography variant="body2">{role}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Profile;
