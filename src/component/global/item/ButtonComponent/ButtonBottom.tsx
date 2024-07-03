import { Button, Flex, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { useTranslation } from "react-i18next";

type Props = {
  btnCancel: string;
  btnContinue: string;

  onContinueClick: () => void;
};

function ButtonBottom({
  btnCancel,
  btnContinue,

  onContinueClick,
}: Props) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {t} = useTranslation()

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate(-1);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        boxShadow: `var(--box-shadow)`,
        marginTop: 24,
        display: "flex",
        gap: 16,
        justifyContent: "end",
        padding: 14,
      }}
    >
      <Button className="buttonShared" onClick={showModal}>
        {btnCancel}
      </Button>
      <Button
        className="buttonShared"
        type="primary"
        onClick={onContinueClick}
        htmlType="submit"
      >
        {btnContinue}
      </Button>
      <Modal
        centered
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>{t('exitModal')}</h3>
        <p>{t('descExitModal')}</p>
        <Flex justify="space-between">
          <ButtonComponent type="default" data={t('cancel')} onClick={handleCancel}/>
          <ButtonComponent type="primary" data={t('agree')}onClick={handleOk}/>
        </Flex>
      </Modal>
    </div>
  );
}

export default ButtonBottom;
