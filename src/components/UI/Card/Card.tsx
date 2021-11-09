import { Card as AntCard } from "antd";
import { CardProps } from "antd/lib/card";
import { FC } from "react";

export const Card: FC<CardProps> = (props) => {
  return <AntCard {...props} />;
};
