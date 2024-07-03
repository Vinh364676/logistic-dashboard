import BreadCrumb from "../../item/BreadCrumb/BreadCrumb";

import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
type Props = {
  title: any;
  type?: "primary" | "dashed" | "default" | "text" | "link";
  data?: any;
  icon?:any;
  to?: any;
  isExist?: boolean;
  handleButton?: () => void;
};

function TitleComponent({ title, type, data, to, isExist = true ,icon,handleButton}: Props) {
  return (
    <Flex style={{ justifyContent: "space-between", alignItems: "center",marginBottom:24 }}>
      <div>
        <h1 style={{color:`var(--primary-color)`}}>{title}</h1>
        <BreadCrumb />
      </div>
      {isExist &&  <Link to={to}>
        <Button
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            height: 42,
            borderRadius: 9,
          }}
          type={type}
          onClick={handleButton}
        >
          {icon}{data}
        </Button>
      </Link>}
     
    </Flex>
  );
}

export default TitleComponent;
