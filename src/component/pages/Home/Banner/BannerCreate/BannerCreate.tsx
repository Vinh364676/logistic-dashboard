import React from "react";

import TitleComponent from "../../../../global/Custom/TitleComponent/TitleComponent";

import BannerScreen from "../../../../screen/Home/Banner/BannerScreen";

function BannerCreate() {

  return (
    <div>
      <TitleComponent title="Tạo mới" isExist={false} />
      <BannerScreen/>
    </div>
  );
}

export default BannerCreate;
