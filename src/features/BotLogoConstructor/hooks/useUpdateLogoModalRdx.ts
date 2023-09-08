import { useAppDispatch, useAppSelector } from "app/store";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { updateBotThunk } from "app/store/reducers/bot/botThunk";

type UseUpdateLogoModalRdxParams = {
  onCloseModal: () => void;
  reloadBotFrame: () => void;
};

export const useUpdateLogoModalRdx = ({ onCloseModal, reloadBotFrame }: UseUpdateLogoModalRdxParams) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.botReducer);

  const handleSubmit = async (botLogo: BotViewModel["logo"]) => {
    await dispatch(updateBotThunk({ logo: botLogo }));
    onCloseModal();
    reloadBotFrame();
  };

  return { handleSubmit, isLoading };
};
