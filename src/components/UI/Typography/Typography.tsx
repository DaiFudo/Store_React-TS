import { Typography as AntTypography } from "antd";
import { TypographyProps } from "antd/lib/typography";
import { FC } from "react";

const Typography: FC<TypographyProps> = (props) => {
  return <AntTypography {...props} />;
};
export default Typography;
