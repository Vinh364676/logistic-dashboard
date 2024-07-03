import React, { useEffect, useState } from "react";
import { Card, Col, Form, Input, Row, Upload } from "antd";
import { InboxOutlined, CloseOutlined } from "@ant-design/icons";

import { getByIdGlobal, updateGlobal } from "../../../redux/action/global";
import { Banner_id } from "../../../context/typeGlobal";
import { dispatch, useSelector } from "../../../redux/store";
import ButtonBottom from "../../../global/item/ButtonComponent/ButtonBottom";

import { openNotification } from "../../../global/item/Notification/Notification";
import Loading from "../../../global/item/Loading/loading";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Dragger } = Upload;

function BannerScreen() {
  const {t} = useTranslation()
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [form] = Form.useForm();
  const { globalDetail } = useSelector((state) => state.global);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getByIdGlobal(Banner_id));
  }, []);

  useEffect(() => {
    if (globalDetail.image) {
      setUploadedImage(globalDetail.image);
    }
  }, [globalDetail.image]);

  const handleFileChange = (info: any) => {
    const file = info.file.originFileObj;
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const uploadedImage = e.target.result.toString();
          setUploadedImage(uploadedImage);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseImg = () => {
    setUploadedImage(null);
  };

  const handleSubmit = async() => {
    setLoading(true);
    try{
     
      const values = await form.validateFields();
      console.log('====================================');
      console.log("values",values);
      console.log('====================================');
      const formData = new FormData();
      formData.append("tag", values.tag);
      formData.append("title", values.title);
      formData.append("desc", values.desc);
      if (uploadedImage) {
        const file = await fetch(uploadedImage).then((res) => res.blob());
        formData.append("image", file);
      }
      await dispatch(updateGlobal({ id: Banner_id, formData }));
      setLoading(false)
      navigate('/Home/Banner');
      openNotification({
        type: 'success',
        message: t('update'),
        description: t('messUpdate'),
      });
     
      dispatch(getByIdGlobal(Banner_id));
      
    }
    catch{
      openNotification({
        type: 'error',
        message: 'Lỗi',
        description: 'Dữ liệu được cập nhật thất bại!',
      });
    }
  }

  return (
    <div>
      {loading?<Loading/>:
       <Form
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      requiredMark={false}
    >
      <Card className="layoutItem">
        <h3 style={{ color: `var(--primary-color)`, marginBottom: 8 }}>
          {t('basicInformation')}
        </h3>
        <Row gutter={[20, 0]}>
          <Col xl={12}>
            <Col xl={24}>
              <Form.Item
                label={t('tag')}
                name="tag"
                initialValue={globalDetail?.tag}
                rules={[{ required: true, message: t('tagInfo.message') }]}
              >
                <Input placeholder={t('tagInfo.placeholder')} />
              </Form.Item>
            </Col>
            <Col xl={24}>
              <Form.Item
                label={t('title')}
                name="title"
                initialValue={globalDetail?.title}
                rules={[{ required: true, message: t('titleInfo.message') }]}
              >
                <Input placeholder={t('titleInfo.placeholder')} />
              </Form.Item>
            </Col>
          </Col>
          <Col xl={12}>
            <Form.Item
              label={t('describtion')}
              name="desc"
              initialValue={globalDetail?.desc}
              rules={[{ required: true, message: t('descInfo.message') }]}
            >
              <Input.TextArea
                placeholder={t('descInfo.placeholder')}
                className="input__textArea"
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>
      <Card className="layoutItem">
        <h3 style={{ color: `var(--primary-color)` }}>{t('imageInfo')}</h3>
        <Row gutter={[20, 0]} style={{ margin: "16px 0" }}>
          <Col xl={24}>
            {uploadedImage ? (
              <Col xl={24}>
                <div>
                  <CloseOutlined
                    style={{
                      position: "absolute",
                      right: 24,
                      top: 12,
                      zIndex: 999,
                      fontSize: 16,
                    }}
                    className="iconCustom"
                    onClick={handleCloseImg}
                  />
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    style={{
                      border: `var(--border-line)`,
                      borderRadius: 10,
                      maxWidth: "100%",
                      padding: 10,
                      background: "rgba(0, 0, 0, 0.02)",
                      position: "relative",
                    }}
                  />
                </div>
              </Col>
            ) : (
              <Form.Item
                name="image"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ảnh!",
                  },
                ]}
              >
                <Dragger
                  name="file"
                  multiple={false}
                  showUploadList={false}
                  onChange={handleFileChange}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    {t('titleFile')}
                  </p>
                  <p className="ant-upload-hint">
                    {t('descFile')}
                  </p>
                </Dragger>
              </Form.Item>
            )}
          </Col>
        </Row>
        <p style={{ margin: 0 }}>{t('sizeIdeal')}: 1920 x 875</p>
      </Card>
      <ButtonBottom
        
          onContinueClick={handleSubmit}
          btnCancel={t('cancel')}
          btnContinue={t('continue')}
        />
    </Form>}
    </div>
   
  );
}

export default BannerScreen;
