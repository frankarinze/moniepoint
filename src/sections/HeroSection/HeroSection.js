import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SectionFooter from "../../components/SectionFooter/SectionFooter";
import TinderCard from 'react-tinder-card'
import { ScrollButton } from '../../components/CustomBtn/ScrollButton'

import "./heropage.css";

const items = [
  {
    name: 'Richard Hendricks',
    url: 'https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://images.pexels.com/photos/4810369/pexels-photo-4810369.jpeg'
  },
  {
    name: 'Monica Hall',
    url: 'https://images.pexels.com/photos/5254867/pexels-photo-5254867.jpeg'

  }

]

const HeroSection = ({ scrollToNextPage }) => {
  const [lastDirection, setLastDirection] = useState();

  // const swiped = (direction, nameToDelete) => {
  //   console.log('removing: ' + nameToDelete)
  //   setLastDirection(direction)
  // }

  // const outOfFrame = (name) => {
  //   console.log(name + ' left the screen!')
  // }

  return (
    <div className="section hero-section" >
      <h1>OUR ADVANTAGES</h1>
      <div className='card-wrapper'>
        {items.map((card, cardIndex) =>
          <TinderCard
            className={`card`}
            key={card.name}
          // onSwipe={(dir) => swiped(dir, card.name)} onCardLeftScreen={() => outOfFrame(card.name)}
          >
            <div
              style={{
                backgroundImage: 'url(' + card.url + ')',
              }}
              className={`card card-${cardIndex + 1}`}
            >
            </div>
          </TinderCard>
        )}
      </div>
      <SectionFooter>
        <ScrollButton onClick={scrollToNextPage} />
      </SectionFooter>

    </div>
  );
};

export default HeroSection;
