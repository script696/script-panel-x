import { useAppDispatch, useAppSelector } from "app/store";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { updateBotThunk } from "app/store/reducers/bot/botThunk";

type useUpdateMainInfoModalRdxParams = {
  onCloseModal: () => void;
};

export const useUpdateMainInfoModalRdx = ({ onCloseModal }: useUpdateMainInfoModalRdxParams) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.botReducer);

  const handleSubmit = async (botMainInfo: BotViewModel["mainInfo"]) => {
    await dispatch(updateBotThunk({ mainInfo: botMainInfo }));
    onCloseModal();
  };

  return { handleSubmit, isLoading };
};
