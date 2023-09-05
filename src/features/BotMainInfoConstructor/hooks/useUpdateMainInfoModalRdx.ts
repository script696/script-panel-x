import { useAppDispatch, useAppSelector } from "app/store";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { updateBotThunk } from "app/store/reducers/bot/botThunk";

type useUpdateMainInfoModalRdxParams = {
  onCloseModal: () => void;
};

export const useUpdateMainInfoModalRdx = ({
  onCloseModal,
}: useUpdateMainInfoModalRdxParams) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.botReducer);

  const handleSubmit = async (bot: BotViewModel["mainInfo"]) => {
    await dispatch(updateBotThunk(bot));
    onCloseModal();
  };

  return { handleSubmit, isLoading };
};
