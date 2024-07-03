import React, { useState } from "react";
import { Menu, Modal } from "antd";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  BulbOutlined,
  HddOutlined,
  UngroupOutlined,
  DisconnectOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { SubMenu } = Menu;

const SliderApp = ({ selectedKey, onClick }: any) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const handleMenuClick = ({ key }: any) => {
    onClick(key);
    navigate(`/${key}`);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.removeItem('token');
    window.location.href = "/sign-in"; 
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onClick={handleMenuClick}
      className="sliderApp"
    >
      <Menu.Item key="" icon={<HomeOutlined />}>
      {t('layout.dashboard')}
      </Menu.Item>
      <SubMenu
        key="sub1"
        style={{ background: "none" }}
        icon={<AppstoreOutlined />}
        title={t('layout.home.home')}
      >
        <Menu.Item key="Home/Banner" className="menuitemSub">
          {t('layout.home.banner')}
        </Menu.Item>
        <Menu.Item key="Home/Solution" className="menuitemSub">
          {t('layout.home.solution')}
        </Menu.Item>
        <Menu.Item key="Home/Contact" className="menuitemSub">
        {t('layout.home.contact')}
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={<BulbOutlined />} key="About">
        About
      </Menu.Item>
      <Menu.Item icon={<UserOutlined />} key="User">
        User
      </Menu.Item>
      <Menu.Item icon={<HddOutlined />} key="Profile">
        Profile
      </Menu.Item>
      <Menu.Item icon={<UngroupOutlined />} key="Contact">
        Contact
      </Menu.Item>
      <Menu.Item
        icon={<DisconnectOutlined />}
        key="Sign-out"
        onClick={showModal}
      >
        Đăng xuất
      </Menu.Item>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={340}
      >
        <h3 style={{ textAlign: "center", fontSize: 24 }}>Đăng xuất</h3>
        <p style={{ textAlign: "center", fontSize: 16 }}>
          Bạn có chắc chắn đăng xuất?
        </p>
      </Modal>
    </Menu>
  );
};

export default SliderApp;
