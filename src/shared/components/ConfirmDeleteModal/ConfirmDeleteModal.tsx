import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import SvgContainer from "../SvgContainer/SvgContainer";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

type ConfirmDialogProps = {
  description?: string;
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
  isLoading: boolean;
  title: string;
};

const ConfirmDeleteModal = ({ description, onClose, onConfirm, open, isLoading, title }: ConfirmDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
    >
      <DialogContent sx={{ textAlign: "center" }}>
        <SvgContainer>
          <DeleteOutlineOutlinedIcon style={{ maxWidth: 280, width: "100%" }} />
        </SvgContainer>
        <DialogTitle id="confirm-dialog-title" sx={{ pb: 1, pt: 0 }}>
          {title}
        </DialogTitle>
        {description && <DialogContentText id="confirm-dialog-description">{description}</DialogContentText>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton autoFocus onClick={onConfirm} loading={isLoading} variant="contained">
          {t("common.confirm")}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
