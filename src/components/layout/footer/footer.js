import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import "./footer.css";

export const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
              <br />
              <p>ASSEGURA LGBTQIA+ | TODOS OS DIREITOS RESERVADOS | DESENVOLVIDO POR SQUAD 4 - SPM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};