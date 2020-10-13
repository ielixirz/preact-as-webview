import { h } from "preact";
import style from "./style.css";
import PageContainer from "../../components/container/PageContainer";
import { route } from "preact-router";

const Home = () => {
  return (
    <PageContainer>
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <button onClick={() => route("/profile")}>PROFILE</button>
          <br />
          <button onClick={() => route("/stepper")}>Stepper</button>
      </div>
    </PageContainer>
  );
};

export default Home;
