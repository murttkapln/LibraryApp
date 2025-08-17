import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/about.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm Murat</h2>
        <h3>
          I'm currently learning different full-stack development languages.
        </h3>
        <h4>
          I already know JavaScript, ReactJS, Next.js, 
          Node.js, MongoDB, SQL, Python, and AWS services.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          {iconData.map((item) => (
            <Link to={item?.href} target="_blank">
              <Icon key={item?.icon} {...item} />
            </Link>
          ))}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
