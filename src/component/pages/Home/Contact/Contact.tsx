import React, { useEffect, useState } from "react";
import TitleComponent from "../../../global/Custom/TitleComponent/TitleComponent";
import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Form, Input, Modal, Row, Select, Space } from "antd";
import { dispatch, useSelector } from "../../../redux/store";
import { getByIdGlobal } from "../../../redux/action/global";
import { Contact_id } from "../../../context/typeGlobal";
import Loading from "../../../global/item/Loading/loading";
import { useTranslation } from "react-i18next";
import TableComponent from "../../../global/Custom/TableComponent/TableComponent";

import { getContact } from "../../../redux/action/contact";

function ContactPage() {
  const { t } = useTranslation();
  const { globalDetail } = useSelector((state) => state.global);
  const { contactList } = useSelector((state) => state.contact);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  console.log('====================================');
  console.log("selectedIds",selectedIds);
  console.log('====================================');
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getByIdGlobal(Contact_id));
        await dispatch(getContact({}));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 180,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 180,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: 180,
    },
    {
      title: "City",
      dataIndex: "city",
      width: 180,
    },
    {
      title: "Desciption",
      dataIndex: "desc",
    },
  ];
  const data = contactList.map((contact, index) => ({
    key: contact._id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    city: contact.city,
    desc: contact.desc,
  }));
  const options = [
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ];
  const handleButton = (selectedIds: any) => {
    setSelectedIds(selectedIds);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <TitleComponent
            title={t("layout.home.contact")}
            type="primary"
            icon={<EditOutlined />}
            data={t("edit")}
            to={"/Home/Contact/Edit"}
          />
          <Card className="layoutItem">
            <h3 style={{ color: `var(--primary-color)`, marginBottom: 8 }}>
              {t("basicInformation")}
            </h3>
            <Row gutter={[20, 0]}>
              <Col xl={12}>
                <Col xl={24}>
                  <p className="tilteForm">{t("tag")}</p>
                  <p className="descForm">{globalDetail.tag}</p>
                </Col>
                <Col xl={24}>
                  <p className="tilteForm">{t("title")}</p>
                  <p className="descForm">{globalDetail.title}</p>
                </Col>
              </Col>
              <Col xl={12}>
                <p className="tilteForm">{t("describtion")}</p>
                <p className="descForm descForm__textArea">
                  {globalDetail.desc}
                </p>
              </Col>
            </Row>
          </Card>

          <TableComponent
            onChangePage={10}
            totalPage={10}
            columns={columns}
            data={data}
            handleButton={handleButton}
          />
          <Modal
            title="Thư mới"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
          >
            <Form form={form}>
              <Form.Item>
                <div className="form-field">
                  <Select
                  className="form-input"
                    mode="multiple"
                    style={{
                      width: "100%",
                    }}
                    placeholder="select one country"
                    defaultValue={["china"]}
                    // onChange={handleChange}
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        {option.data.desc}
                      </Space>
                    )}
                  />
                  <label htmlFor="Người nhận" className="form-label">
                    Người nhận
                  </label>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="form-field">
                  <Input className="form-input" placeholder=" " />
                  <label htmlFor="Tiêu đề" className="form-label">
                    Tiêu đề
                  </label>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="form-field">
                  <Input.TextArea
                    className="form-input"
                    placeholder=" "
                    style={{ minHeight: 300 }}
                  />
                  <label htmlFor=" Mô tả" className="form-label">
                    Mô tả
                  </label>
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
