import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import CallActions from "./callActions/CallActions";
import Works from "./works/Works";
import Articles from "./articles/Articles";

const ajudaPsicologica = () => {
  return (
    <>
      <Banner />
      <Intro />
      <CallActions />
      <Works/>
      <Articles/>
    </>
  );
};

export default ajudaPsicologica;