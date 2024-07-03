import React, { useState } from "react";
import {
  Affix,
  Avatar,
  Button,
  Drawer,
  Flex,
  Layout,
  Menu,
  Select,
  theme,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
  MoonOutlined,
  AntDesignOutlined,
  VerifiedOutlined,
  BlockOutlined
} from "@ant-design/icons";
import { BrowserRouter as Router } from "react-router-dom";
import StickyBox from "react-sticky-box";

import SliderApp from "./Slider/Slider";
import ContentComponent from "./Content";
import logoApp from "../../../accset/logoApp.png";
import iconLogo from "../../../accset/iconLogo.png";
import Vietnam from "../../../accset/svg/flag/vietnam";
import United from "../../../accset/svg/flag/united";
import { useTranslation } from "react-i18next";

const { Header, Sider, Content } = Layout;

const LayoutApp = () => {
  const {t} = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("home");

  const { i18n } = useTranslation();
  const handleMenuClick = (key: any) => {
    setSelectedKey(key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleChangeLanguage = (selectedOption: any) => {
    i18n.changeLanguage(selectedOption);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={264}
          style={{
            minHeight: "100vh",
            background: "#fff",

            borderInlineEnd: `var(--border-line)`,
          }}
        >
          <StickyBox offsetTop={10}>
            <div
              className="demo-logo-vertical"
              style={{
                height: "50px",
                borderRadius: "10px",
                margin: "10px 4px",
              }}
            >
              <div
                style={
                  collapsed
                    ? {
                        background: `url(${iconLogo}) no-repeat center center`,
                        width: "100%",
                        height: "100%",
                      }
                    : {
                        background: `url(${logoApp}) no-repeat center center`,
                        width: "100%",
                        height: "100%",
                      }
                }
              ></div>
            </div>
            <SliderApp selectedKey={selectedKey} onClick={handleMenuClick} />
          </StickyBox>
        </Sider>
        <Layout>
          <Affix offsetTop={0}>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                paddingInline: 46,
                height: 64,
                borderBottom: `var(--border-line)`,
              }}
            >
              <Flex
                justify="space-between"
                align="center"
                style={{ height: "100%" }}
              >
                <Flex>
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    className="iconCustom"
                  />
                </Flex>
                <Flex align="center" gap={14}>
                  <Select
                    className="customSelect"
                    defaultValue={{ value: "vn", label: <Vietnam /> }}
                    onChange={handleChangeLanguage}
                    options={[
                      { value: "vn", label: <Vietnam /> },
                      { value: "en", label: <United /> },
                    ]}
                  />
                  <MoonOutlined className="iconCustom" />
                  <BellOutlined className="iconCustom" />
                  <SettingOutlined className="iconCustom" />
                  <Avatar
                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
                    size={39}
                    icon={<UserOutlined />}
                    onClick={showDrawer}
                  />
                </Flex>
              </Flex>
            </Header>
          </Affix>

          <Content
            style={{
              padding: "0px 46px 24px 46px",
              minHeight: 280,
              background: "#fff",
            }}
          >
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
      <Drawer
        width={330}
        onClose={onClose}
        open={open}
        style={{ position: "relative" }}
        footer={
        
            <Button
              style={{ width: "100%", height: 46,margin:"8px 0" }}
              className="buttonCustomer"
            >
              Logout
            </Button>
         
        }
      >
      
        <Flex style={{ flexDirection: "column" }}>
          <Flex
            justify="center"
            align="center"
            style={{
              flexDirection: "column",
              borderBottom: "var(--border-line)",
              marginTop: 12,
              paddingBottom: 18,
            }}
          >
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 100,
                xxl: 100,
              }}
              icon={<AntDesignOutlined />}
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
            />
            <h3
              style={{ margin: "18px 0 8px 0", fontWeight: 500, fontSize: 17 }}
            >
              Jaydon Frankie
            </h3>
            <p
              style={{
                margin: 0,
                fontWeight: 500,
                color: "rgba(0, 0, 0, 0.3)",
                fontSize: 15,
              }}
            >
              demo@minimals.cc
            </p>
          </Flex>
          <Flex>
          <Menu
      theme="light"
      mode="inline"
     
      onClick={handleMenuClick}
      className="menuProfile"
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
      {t('layout.profile')}
      </Menu.Item>
      <Menu.Item key="2" icon={<BlockOutlined />}>
      {t('layout.project')}
      </Menu.Item>
      <Menu.Item key="3" icon={<VerifiedOutlined />}>
      {t('layout.security')}
      </Menu.Item>
      <Menu.Item key="4" icon={<SettingOutlined />}>
      {t('layout.accountSetting')}
      </Menu.Item>
    
    </Menu>
          </Flex>
        </Flex>
       
      </Drawer>
    </Router>
  );
};

export default LayoutApp;
