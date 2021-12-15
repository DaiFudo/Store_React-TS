import store from "../../../store/store";

import TFormInputs from "../../../store/types/TFormInputs";

import { uid } from "uid";

import { Form, Select } from "antd";
import Button from "../../UI/Button/Button";
import InputNumber from "../../UI/Input/InputNumber";
import Input from "../../UI/Input/Input";

const CreateModeCategory = () => {
  function onFinish(values: TFormInputs) {
    let id = uid();
    const formValues = { ...values, id };
    let keyCategory = formValues.category;
    if (keyCategory === "mouses") {
      store.setMouses(formValues);
    } else if (keyCategory === "keyboards") {
      store.setKeyboards(formValues);
    } else if (keyCategory === "cpu") {
      store.setCpu(formValues);
    } else if (keyCategory === "headphones") {
      store.setHeadphones(formValues);
    }
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item shouldUpdate name="name" label="Name item:">
        <Input />
      </Form.Item>
      <Form.Item name="url" label="URL image:">
        <Input />
      </Form.Item>
      <Form.Item name="category" label="Category:">
        <Select>
          <Select.Option value="mouses">Mouses</Select.Option>
          <Select.Option value="keyboards">Keyboards</Select.Option>
          <Select.Option value="headphones">Headphones</Select.Option>
          <Select.Option value="cpu">CPU</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="price" label="Price">
        <InputNumber controls={false} addonAfter="$" />
      </Form.Item>
      <Form.Item name="promotion" label="Promotion">
        <InputNumber controls={false} addonAfter="$" />
      </Form.Item>
      <Form.Item label="Button">
        <Button htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  );
};
export default CreateModeCategory;
