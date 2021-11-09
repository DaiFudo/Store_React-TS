import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
//import { UIModal } from "../../UI/UIModal";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import "../UserPannel/styles.css";
import { useState } from "react";
const UserPannel: React.FC = () => {
  //Просто тест для доработки ассинхронного логина/регистрации/
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
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
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};
export default UserPannel;
