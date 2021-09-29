import React from "react";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const StudentRegister = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onReset = () => {
    console.log("onReset");
    form.resetFields();
  };

  const onFinish = (values) => {
    const now = moment();
    const dob = values.dob.format("DD-M-YYYY");
    const studentAge = now.diff(dob, "years");
    const newStudent = {
      key: Math.random(),
      name: values.name,
      dob: values.dob.format("DD-MM-YYYY"),
      age: studentAge,
      stream: values.stream,
      subject_line_1: values.subject_1,
      subject_line_2: values.subject_1,
      subject_line_3: values.subject_1,
    };

    dispatch({ type: "add", payload: newStudent });
  };

  return (
    <div className="container">
      <h2 className="title"> Registration Form</h2>
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item name="name" label="Name">
              <Input required={true} />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item name="dob" label="Date of Birth">
              <DatePicker />
            </Form.Item>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item name="stream" label="Stream" required={true}>
              <Select>
                <Select.Option value="Math">Math</Select.Option>
                <Select.Option value="Bio">Bio</Select.Option>
                <Select.Option value="Business">Business</Select.Option>
                <Select.Option value="Arts">Arts</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item name="subject_1" label="Subject line 1 score">
              <InputNumber required={true} max={100} min={0} />
            </Form.Item>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
            <Form.Item name="subject_2" label="Subject line 2 score">
              <InputNumber required={true} max={100} min={0} />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item name="subject_3" label="Subject line 3 score">
              <InputNumber required={true} max={100} min={0} />
            </Form.Item>
          </div>
        </div>
        <div className="buttons row mb-2">
          <div className="button">
            <Form.Item>
              <Button type="submit" htmlType="primary">
                Save
              </Button>
            </Form.Item>
          </div>
          <div className="button">
            <Form.Item>
              <Button onClick={onReset}>Reset</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default StudentRegister;
