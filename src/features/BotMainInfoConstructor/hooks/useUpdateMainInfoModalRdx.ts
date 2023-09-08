import { useAppDispatch, useAppSelector } from "app/store";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { updateBotThunk } from "app/store/reducers/bot/botThunk";

type useUpdateMainInfoModalRdxParams = {
  onCloseModal: () => void;
  reloadBotFrame: () => void;
};

export const useUpdateMainInfoModalRdx = ({ onCloseModal, reloadBotFrame }: useUpdateMainInfoModalRdxParams) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.botReducer);

  const handleSubmit = async (botMainInfo: BotViewModel["mainInfo"]) => {
    await dispatch(updateBotThunk({ mainInfo: botMainInfo }));
    reloadBotFrame();
    onCloseModal();
  };

  return { handleSubmit, isLoading };
};
