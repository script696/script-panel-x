import Box, { BoxProps } from "@material-ui/core/Box";
import { ReactComponent as LogoSvg } from "shared/assets/paper-plane.svg";

type LogoProps = {
  size?: number;
} & BoxProps;

const Logo = ({ size = 40, ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <LogoSvg height={size} width={size} />
    </Box>
  );
};

export default Logo;
