import React from "react";
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { useDrag } from 'react-use-gesture';
import "./heropage.css";

const ScrollButtonWrapper = ({ onClick }) => {
  return (
    <Button className="scroll-btn" onClick={onClick}>
      <FontAwesomeIcon className="bounce-arrow" icon={faArrowDown} size="2x" />
    </Button>
  );
};

const cards = [
  { backgroundColor: "blue", rotate: -24 },
  { backgroundColor: "red", rotate: -15 },
  { backgroundColor: "black", rotate: -8 },
];

const HeroPage = ({ scrollToNextPage }) => {
  const [index, setIndex] = React.useState(0);
  const props = useSpring({
    x: -index * 100,
    config: { tension: 200, friction: 20 },
  });

  const bind = useDrag(
    ({ down, movement: [mx] }) => {
      if (down && Math.abs(mx) > window.innerWidth / 3) {
        const direction = mx > 0 ? -1 : 1;
        const newIndex = Math.min(Math.max(index + direction, 0), cards.length - 1);
        setIndex(newIndex);
      }
    },
    { axis: 'x' }
  );

  return (
    <div className="section hero-section" {...bind()}>
      <h1>OUR ADVANTAGES</h1>
      <div className="card-wrapper">
        {cards.map((card, cardIndex) => (
          <animated.div
            key={cardIndex}
            className={`card card-${cardIndex + 1}`}
            style={{
              transform: props.x.interpolate((x) => `translate3d(${x}%, 0, 0) rotate(${card.rotate}deg)`),
              backgroundColor: card.backgroundColor,
            }}
          />
        ))}
      </div>
      <ScrollButtonWrapper onClick={() => scrollToNextPage()} />
    </div>
  );
};

export default HeroPage;
