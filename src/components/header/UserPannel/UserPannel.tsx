import { Modal } from "../../UI/Modal/Modal";
import { HeartOutlined } from "../../UI/Icons/HeartOutlined";
import { ShoppingCartOutlined } from "../../UI/Icons/ShoppingCartOutlined";

import "antd/dist/antd.css";
import "../UserPannel/styles.css";
import { useState } from "react";
import { Button } from "../../UI/Button/Button";
import ModalForms from "./Form/Form";

const UserPannel: React.FC = () => {
  //Просто тест для доработки ассинхронного логина/регистрации/
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div className="user-pannel-wrapper">
      <div className="user-pannel-icons">
        <HeartOutlined />
        <ShoppingCartOutlined />
      </div>
      <Button type="primary" onClick={showModal}>
        Login/Reg
      </Button>
      <Modal
        title="Auth"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <ModalForms />
      </Modal>
    </div>
  );
};
export default UserPannel;
