import { h } from "preact";
import style from "./style.css";

const PageContainer = (props) => {
  const { children } = props;
  return <div class={style.container}>{children}</div>;
};

export default PageContainer;
