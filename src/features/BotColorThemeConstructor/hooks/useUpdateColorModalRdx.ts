import { useAppDispatch, useAppSelector } from "app/store";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { updateBotThunk } from "app/store/reducers/bot/botThunk";

type useUpdateMainInfoModalRdxParams = {
  onCloseModal: () => void;
};

export const useUpdateColorModalRdx = ({ onCloseModal }: useUpdateMainInfoModalRdxParams) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.botReducer);

  const handleSubmit = async (botColorTheme: BotViewModel["colorTheme"]) => {
    await dispatch(updateBotThunk({ colorTheme: botColorTheme }));
    onCloseModal();
  };

  return { handleSubmit, isLoading };
};
