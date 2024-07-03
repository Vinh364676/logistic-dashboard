import { Button, Checkbox, Col, Flex, Form, Input, Row, Tag } from "antd";
import Lottie from "lottie-react";
import React, { useState } from "react";
import signInAnimation from "../../../accset/json/signInJson.json";
import accountService from "../../service/auth";
import iconLogo from "../../../accset/logoApp.png";
import "./Sign.scss";
import { openNotification } from "../../global/item/Notification/Notification";
import { useTranslation } from "react-i18next";
import Loading from "../../global/item/Loading/loading";
import { InfoCircleOutlined } from "@ant-design/icons";
interface SignInProps {
  onLoginSuccess: () => void;
}
function SignIn({ onLoginSuccess }: SignInProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log("====================================");
    console.log("values", values);
    console.log("====================================");
    const loginData = {
      username: values.username,
      password: values.password,
    };
    console.log("loginData", loginData);

    try {
      setLoading(true);
      const response = await accountService.login(loginData);
      console.log("Login successful:", response);
      openNotification({
        type: "success",
        message: t("login.success"),
        description: t("login.messSuccess"),
      });
      setTimeout(() => {
        const { token } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          onLoginSuccess();
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error);
      openNotification({
        type: "error",
        message: t("login.failure"),
        description: t("login.mesFailure"),
      });
    }
  };
  const initialValues = {
    username: "adminDemoWeb",
    password: "demo@123", // Bạn có thể đặt một giá trị mặc định cho mật khẩu nếu cần
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ background: "#f2f2f2" }}>
          <Row>
            <Col xl={16}>
              <div
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  margin: "10px 4px",
                }}
              >
                <div
                  style={{
                    marginLeft: 20,
                    height: "100%",
                    background: `url(${iconLogo}) no-repeat left center`,
                  }}
                ></div>
              </div>
              <Lottie
                animationData={signInAnimation}
                style={{ width: 650, margin: "0 auto" }}
              />
            </Col>
            <Col xl={8} className="signInRight">
              <h2 className="signInRight--title">Welcome</h2>
              <p className="signInRight--desc">Sign in to your account</p>
              <Tag
                style={{
                  height: 46,
                  marginBottom: 32,
                  border: "none",
                  background: "#CAFDF5",
                  borderRadius:8,
                  fontSize:14,
                 
                }}
              >
                <Flex align="center" justify="center" style={{height:"100%", gap:8}}>
                <InfoCircleOutlined style={{fontSize:16,color:`var(--primary-color)`,paddingLeft:20}}/>
                <span style={{paddingRight:20}}>Use Username <span style={{fontWeight:500}}>adminDemoWeb</span> with Password <span style={{fontWeight:500}}>demo@123</span></span>
                </Flex>
              
              </Tag>
              <Form
                name="basic"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={initialValues}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  className="formItem"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <div className="form-field">
                    <Input
                      className="form-input"
                      placeholder=" "
                      defaultValue="adminDemoWeb"
                    />
                    <label htmlFor="password" className="form-label">
                      Username
                    </label>
                  </div>
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <div className="form-field">
                    <Input
                      className="form-input"
                      placeholder=" "
                      defaultValue="demo@123"
                    />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                  </div>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", height: 46, marginTop: 16,fontWeight:600 }}
                >
                  Sign in
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default SignIn;
