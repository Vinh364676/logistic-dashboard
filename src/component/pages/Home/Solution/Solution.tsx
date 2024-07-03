import React, { useEffect, useState } from "react";
import TitleComponent from "../../../global/Custom/TitleComponent/TitleComponent";

import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { dispatch, useSelector } from "../../../redux/store";
import { getByIdGlobal } from "../../../redux/action/global";
import { Solution_id } from "../../../context/typeGlobal";
import Loading from "../../../global/item/Loading/loading";
import { useTranslation } from "react-i18next";
function SolutionPage() {
  const {t} = useTranslation();
  const {globalDetail} = useSelector(state => state.global)
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    dispatch(getByIdGlobal(Solution_id))
    .then(() => setLoading(false)) 
      .catch(error => {
        
        setLoading(false); 
      });
  },[])
  return (
  
    <div>
      {loading?<Loading/>: <div>
      <TitleComponent
        title={t('layout.home.solution')}
        type="primary"
        icon={<EditOutlined />}
        data={t('edit')}
        to={"/Home/Solution/Edit"}
      />
      <Card className="layoutItem">
        <h3 style={{ color: `var(--primary-color)`, marginBottom: 8 }}>
          {t('basicInformation')}
        </h3>
        <Row gutter={[20, 0]}>
          <Col xl={12}>
            <Col xl={24}>
              <p className="tilteForm">{t('tag')}</p>
              <p className="descForm">{globalDetail.tag}</p>
            </Col>
            <Col xl={24}>
              <p className="tilteForm">{t('title')}</p>
              <p className="descForm">{globalDetail.title}</p>
            </Col>
          </Col>
          <Col xl={12}>
            <p className="tilteForm">{t('describtion')}</p>
            <p className="descForm descForm__textArea">
             {globalDetail.desc}
            </p>
          </Col>
        </Row>
      </Card>
      <Card className="layoutItem">
        <h3 style={{ color: `var(--primary-color)` }}>{t('imageInfo')}</h3>
          <img src={globalDetail.image} alt="" style={{width:"100%",borderRadius:10,marginTop:14}}/>
       
      </Card>
      </div>}
     
      
    </div>
  );
}

export default SolutionPage;
