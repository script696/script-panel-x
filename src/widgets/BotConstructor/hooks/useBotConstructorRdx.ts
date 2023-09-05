import { useAppSelector } from "app/store";

export const useBotConstructorRdx = () => {
  const botState = useAppSelector((state) => state.botReducer);

  return { botState };
};
