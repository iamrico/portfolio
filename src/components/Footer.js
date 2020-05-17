import React from "react";
import "../styles/footer.scss";
import linkedin_logo from "../assets/linkedin.png";
import styled from "styled-components";

const LinkedInLogo = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 15px;
`;

const FooterSection = styled.footer`
  display: flex;
  width: 100%;
  height: 10%;
  background-color: #183a5a;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="fItem">
        <strong>Contact Me</strong>
      </div>
      <div className="fItem">
        <a href="mailto:jerichomesina02@gmail.com">
          @ jerichomesina02@gmail.com
        </a>
      </div>
      <div className="fItem">
        <LinkedInLogo src={linkedin_logo} />
        <a href={"https://www.linkedin.com/in/jericho-mesina-7a4a4016b/"}>
          Jericho Mesina
        </a>
      </div>
    </FooterSection>
  );
};
export default Footer;
