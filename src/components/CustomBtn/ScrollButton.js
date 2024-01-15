import React from "react"
import { Button } from "react-bootstrap"
import { useSpring, animated } from "react-spring";
import "./btn.css"
import arrowDown from "../../assets/arrow-down.svg";

export const ScrollButton = ({ onClick }) => {
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

