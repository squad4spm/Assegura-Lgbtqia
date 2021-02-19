import Video from "./video/Video";
import Banner from "./banner/Banner";
import CallDownload from "./callDownload/CallDownload";
import Informacoes from "./informacoes/Informacoes";
import Feedback  from "../../components/layout/feedback/feedback";

const direitosLgbtqia = () => {
  return (
    <>
      <Banner />
      <Informacoes />
      <Video />
      <CallDownload />
      <Feedback />
    </>
  );
};

export default direitosLgbtqia;