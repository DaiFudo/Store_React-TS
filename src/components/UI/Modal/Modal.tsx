import { Modal as AntModal } from "antd";
import { ModalProps } from "antd/lib/modal";
import { FC } from "react";

export const Modal: FC<ModalProps> = (props) => {
  return <AntModal {...props} />;
};
