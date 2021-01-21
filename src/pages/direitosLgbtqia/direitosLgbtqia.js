import Video from "./video/Video";
import Banner from "./banner/Banner";
import CallDownload from "./callDownload/CallDownload";
import Informacoes from "./informacoes/Informacoes";

export default () => {
  return (
    <>
      <Banner />
      <Informacoes />
      <Video />
      <CallDownload />
    </>
  );
};
