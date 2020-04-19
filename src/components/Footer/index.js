import React, { useState } from "react";
import Card from "../Card";
import Button from "../Button/index"
import "./style.css"

const resumé = require("../../assets/resume.pdf")


function Footer() {

  return (
    <footer className="footer">
      <div className="footer-text text-center py-3">
          © 2020 Copyright&nbsp;&nbsp;
        <a href="https://github.com/maxkulicke" className="footer-text" target="_blank">
          <i class="fab fa-github-square"></i> &nbsp;&nbsp;Github&nbsp;&nbsp; </a>
        <a href="https://www.linkedin.com/in/max-kulicke-54516428/" className="footer-text" target="_blank">
            <i class="fab fa-linkedin"></i> &nbsp;&nbsp;LinkedIn&nbsp;&nbsp; </a>
        <a href={resumé} download={resumé} className="footer-text" target="_blank">
          <i class="fas fa-file-download"></i> &nbsp;&nbsp;Resumé&nbsp;&nbsp; </a>
      </div>
    </footer>
  );
}

export default Footer;