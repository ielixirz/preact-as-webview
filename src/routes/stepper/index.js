import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import PageContainer from "../../components/container/PageContainer";
import style from "./style.css";
import { Steps, Button, message, Carousel } from "antd";
const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
// Note: `user` comes from the URL, courtesy of our router
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Stepper = () => {
  const [page, setCurrent] = useState(0);
  const stepperContent = useRef(null);
  useEffect(() => {
    try {
      stepperContent.current.goTo(page);
    } catch (e) {
      console.log(e);
    }
  }, [page]);
  const next = () => {
    const current = page + 1;
    setCurrent(current);
  };

  const prev = () => {
    const current = page - 1;
    setCurrent(current);
  };
  const onChange = (a) => {
    setCurrent(a);
  };
  return (
    <PageContainer>
      <div class={style.profile}>
        <Steps current={page}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>
          <Carousel ref={stepperContent} afterChange={onChange}>
            {steps.map((item) => {
              return (
                <div>
                  <h3 style={contentStyle}>{item.content}</h3>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="steps-action">
          {page < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {page === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {page > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        <p>Stepper Page</p>
      </div>
    </PageContainer>
  );
};

export default Stepper;
