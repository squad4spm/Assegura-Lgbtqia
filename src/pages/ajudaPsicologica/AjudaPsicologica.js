import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import CallActions from "./callActions/CallActions";
import Articles from "./articles/Articles";

import Feedback  from "../../components/layout/feedback/feedback";

const ajudaPsicologica = () => {
  return (
    <>
      <Banner />
      <Intro />
      <CallActions />
      <Articles/>
      <Feedback />
    </>
  );
};

export default ajudaPsicologica;