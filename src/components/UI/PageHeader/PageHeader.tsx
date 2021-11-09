import { PageHeader as AntPageHeader } from "antd";
import { PageHeaderProps } from "antd/lib/page-header";
import { FC } from "react";

export const PageHeader: FC<PageHeaderProps> = (props) => {
  return <AntPageHeader {...props} />;
};
