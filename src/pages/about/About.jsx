
import { AboutContainer, IconContainer, InfoContainer, ProfileImg } from './About.style'
import profile from "../../assets/about.png";
const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt='murat'/>

    <InfoContainer>
       <h2>Hi, I'm Murat</h2>
        <h3>
          I'm currently learning different full-stack development languages.
        </h3>
        <h4>
          I already know JavaScript, ReactJS, Next.js, React Native,
          Node.js, MongoDB, SQL, Python, and AWS services.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          
        </IconContainer>
    </InfoContainer>

    </AboutContainer>
  )
}

export default About