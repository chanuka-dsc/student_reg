import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const AddStudentForm = () => {
  return (
    <div>
      <Form
        name="addStudent"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
        autoComplete="off"
      >
        {/* <Form.item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name !" ,}]}
        ><Input /></Form.item> */}
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddStudentForm;
