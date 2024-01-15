import React from "react";
import { Button } from "react-bootstrap"
import { useSpring, animated } from "react-spring";
import "./sectionfooter.css"
import arrowDown from "../../assets/arrow-down.svg";
import { LiaFacebookSquare, LiaYoutubeSquare, LiaInstagram } from "react-icons/lia";


const ScrollButtonWrapper = ({ onClick }) => {
  const props = useSpring({
    config: { mass: 5, tension: 100, friction: 10 },
    to: { transform: "translateY(60px)" },
    from: { transform: "translateY(20px)" },
    onRest: () => {
      // Stop the animation after the first bounce
      props.stop();
    },
  });

  return (
    <animated.div style={props}>
      <Button className="scroll-btn" onClick={onClick}>
        <img src={arrowDown} alt="arrow" height="30" className="bounce-arrow" />
      </Button>
    </animated.div>
  );
};

const SectionFooter = ({children }) => {
  return (
    <div
      className="footer-section">
      <div className="left-footer-wrapper">
        <p>Your Smile, Our Passion</p>
      </div>
      <div className="center-footer-wrapper">
        {children}
      </div>

      <div className="right-footer-wrapper">
        <div>
          <div className="social-icon">
            <LiaFacebookSquare size={30} className="icon"/>
            <LiaYoutubeSquare size={30} className="icon" />
            <LiaInstagram size={30} className="icon" />
          </div>
          <p>Best Start Up of 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFooter;