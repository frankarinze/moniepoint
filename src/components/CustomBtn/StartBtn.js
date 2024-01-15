import React from "react"
import { Button } from "react-bootstrap"
import { useSpring, animated } from "react-spring";
import "./btn.css"
import arrowDown from "../../assets/arrow-down.svg";

export const StartBtn = ({ onClick }) => {
    const props = useSpring({
        config: { mass: 2, tension: 1000, friction: 100 },
        to: { transform: "translateY(60px)" },
        from: { transform: "translateY(20px)" },
        onRest: () => {
            // Stop the animation after the first bounce
            props.stop();
        },
    });

    return (
        <animated.div style={props}>
            <div className="start-btn-wrapper bounce" onClick={onClick}>
                <Button className="start-btn" >
                    GET<br/> STARTED
                </Button>
                <div className="start-btn-border"/>
            </div>
        </animated.div>
    );
};

