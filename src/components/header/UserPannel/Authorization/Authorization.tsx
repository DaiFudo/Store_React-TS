import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import ModalForms from "./ModalForm/ModalForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Authorization = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  let navigate = useNavigate();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const regOn = () => {
    return (
      <Button type="primary" onClick={logOut}>
        Exit
      </Button>
    );
  };
  const regOff = () => {
    return (
      <Button type="primary" onClick={showModal}>
        Log/Reg
      </Button>
    );
  };

  return (
    <div>
      {localStorage.getItem("nickname") ? regOn() : regOff()}
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
