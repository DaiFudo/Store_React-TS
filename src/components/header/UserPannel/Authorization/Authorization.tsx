import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import ModalForms from "./ModalForm/ModalForm";
import Space from "../../../UI/Space/Space";

import storeAccount from "../../../../store/storeAccount";

const Authorization: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  let navigate = useNavigate();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const logOut = () => {
    storeAccount.handleAccount(null!);
  };

  const regOn = () => {
    if (storeAccount.user.admin) {
      return (
        <Space>
          <Button type="primary" onClick={() => navigate("/admin")}>
            Admin
          </Button>
          <Button type="primary" onClick={logOut}>
            Exit
          </Button>
        </Space>
      );
    } else {
      return (
        <div>
          <Button type="primary" onClick={logOut}>
            Exit
          </Button>
        </div>
      );
    }
  };
  const regOff = () => {
    return (
      <Button type="primary" onClick={showModal}>
        Log/Reg
      </Button>
    );
  };

  const AuthVisibleBtns = () => {
    return storeAccount.user?.nickname ? regOn() : regOff();
  };

  return (
    <div>
      <AuthVisibleBtns />
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
export default Authorization;
