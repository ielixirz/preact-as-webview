import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import PageContainer from "../../components/container/PageContainer";
import style from "./style.css";
import { Steps, Button, message, Carousel } from "antd";
const { Step } = Steps;

// Note: `user` comes from the URL, courtesy of our router
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
// props is array with component in contents
const Stepper = ({ contents }) => {
  const [page, setCurrent] = useState(0);
  const stepperContent = useRef(null);
  useEffect(() => {
    try {
      // stepperContent.current.goTo(page); for manipulate page uncomment if want to
    } catch (e) {
      console.log(e);
    }
  }, [page]);

  const onChange = (a) => {
    setCurrent(a);
  };
  return (
    <PageContainer>
      <div
        style={{
          height: "100%",
        }}
      >
        {/*data must be component in contents[index].content*/}
        <Carousel ref={stepperContent} afterChange={onChange}>
          {contents.map((item) => {
            return (
              <div>
                <h3 style={contentStyle}>{item.content}</h3>
              </div>
            );
          })}
        </Carousel>
      </div>
    </PageContainer>
  );
};

export default Stepper;
