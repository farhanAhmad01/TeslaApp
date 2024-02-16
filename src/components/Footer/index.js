import React from "react";

import { Wrapper, Content } from "./footer.syle";

const Footer = ({ bottom }) => {
  return (
    <Wrapper>
      <Content className={bottom}>
        <div>
          <a
            href="https://github.com/farhanAhmad01/TeslaApp"
            target="_blank"
          >
            Tesla-Clone &copy; 2022
          </a>
        </div>
        <div>
          <a href="mailto:devfarhanahmad567@gmail.com" target="_blank">
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/01farhanahmad/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/farhanAhmad01" target="_blank">
            GitHub
          </a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
