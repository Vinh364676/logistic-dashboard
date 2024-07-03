import { Button } from "antd";
import React from "react";
type Props = {
  type: "primary" | "dashed" | "default" | "text" | "link";
  data: any;
  href?:any;
  onClick?: () => void;
};
function ButtonComponent({ data, type,href,onClick }: Props) {
  return <Button onClick={onClick} type={type} style={{paddingLeft:24,paddingRight:24,height:42,borderRadius:9}} href={href}>{data}</Button>;
}

export default ButtonComponent;
