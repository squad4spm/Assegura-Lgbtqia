import React from 'react';
import "./btnShare.css";

import { IconContext } from "react-icons";
import { FaShareAlt, FaFacebookF, FaMailBulk, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

import { EmailShareButton, FacebookShareButton, WhatsappShareButton, TelegramShareButton } from "react-share";

export const BtnShare = () => {

  return (
    <div id="botao_flutuanteS">
      <IconContext.Provider value={{ color: "white", size: "1.8em" }}>
          <FaShareAlt />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <EmailShareButton className="share1" url={window.location.href}><FaMailBulk /></EmailShareButton>
        <FacebookShareButton className="share2" url={window.location.href}><FaFacebookF /></FacebookShareButton>
        <WhatsappShareButton className="share3" url={window.location.href}><FaWhatsapp /></WhatsappShareButton>
        <TelegramShareButton className="share4" url={window.location.href}><FaTelegramPlane /></TelegramShareButton>
      </IconContext.Provider>
      
    </div>
  );
};