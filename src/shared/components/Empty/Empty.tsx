import Result from "../ResultImage/ResultImage";
import EmptySvg from "@material-ui/icons/BrowserNotSupportedOutlined";

type EmptyProps = {
  message?: string;
  title: string;
};

const Empty = ({ message, title }: EmptyProps) => {
  return <Result image={<EmptySvg />} subTitle={message} title={title} />;
};

export default Empty;
