import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Tabs, Tab } from "@material-ui/core";
import { MainInfo } from "./MainInfo/MainInfo";
import { Mode } from "../types/typedef";
import { useUsersEditModalRdx } from "../hooks/useUsersEditModalRdx";
import { useTabs } from "shared/hooks/useTabs";

const UsersEditModal = () => {
  const { tab, handleClickTab } = useTabs();

  const { usersState, handleCloseModal, handleSubmitUserMainInfo } = useUsersEditModalRdx();

  const { userCandidate, ui, isLoading } = usersState;

  const { isUserEditModalOpen } = ui;
  const mode: Mode = userCandidate ? "edit" : "create";

  return (
    <Dialog open={isUserEditModalOpen} onClose={handleCloseModal}>
      <Box width={{ md: "500px", height: "80vh" }} display={"flex"} flexDirection={"column"}>
        <DialogTitle id="product-dialog-title">CreateUser</DialogTitle>

        <Tabs value={tab} onChange={handleClickTab} centered>
          <Tab label={"Main Info"} />
        </Tabs>

        {tab === 0 && (
          <MainInfo
            isLoading={isLoading}
            user={userCandidate}
            onClose={handleCloseModal}
            onSubmit={handleSubmitUserMainInfo}
            mode={mode}
          />
        )}
      </Box>
    </Dialog>
  );
};

export default UsersEditModal;
