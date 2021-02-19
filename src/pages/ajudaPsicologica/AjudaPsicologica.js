import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import CallActions from "./callActions/CallActions";
import Works from "./works/Works";
import Articles from "./articles/Articles";

import Feedback  from "../../components/layout/feedback/feedback";

const ajudaPsicologica = () => {
  return (
    <>
      <Banner />
      <Intro />
      <CallActions />
      <Works/>
      <Articles/>
      <Feedback />
    </>
  );
};

export default ajudaPsicologica;