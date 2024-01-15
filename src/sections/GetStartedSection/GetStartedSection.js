import React, { useEffect } from "react";
import { useTrail, animated as anim } from "react-spring";
import { Image, Card, Button } from "react-bootstrap";
import SectionFooter from "../../components/SectionFooter/SectionFooter";
import { StartBtn } from '../../components/CustomBtn/StartBtn'
import DentalIcon from "../../assets/svg/dental-ic.svg";
import DentalIconColored from "../../assets/svg/dental-ic-colored.svg";
import ButterFlyIcon from "../../assets/svg/butterfly.svg";
import YoutubeIcon from "../../assets/svg/youtube.svg";
import Avatar from "../../components/Avatar/Avatar";

import "./getstarted.css";

const GetStartedSection = ({ scrollToNextPage, isOnSection, ref }) => {

  useEffect(() => {
    if (isOnSection) {
      console.log('Get started section')
    }
  }, [isOnSection]);

  const trail = useTrail(1, {
    config: { mass: 5, tension: 100, friction: 10 },
    opacity: isOnSection ? 1 : 0,
    x: isOnSection ? 0 : 20,
    height: isOnSection ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const list = [
    {
      id: 0,
      url: 'https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg'
    },
    {
      id: 1,
      url: 'https://images.pexels.com/photos/4810369/pexels-photo-4810369.jpeg'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/5254867/pexels-photo-5254867.jpeg'

    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg"
    }
  ]

  return (
    <div className="get-started-main" ref={ref}>
      <div>
        <div>
          <div className="row-container">
            <h2>REVOLUTIONIZING </h2>
            <div className="content content-wrapper">
              <div className="icon-wrapper">
                <Image className="icon" src={DentalIcon} roundedCircle />
                <Image className="icon" src={DentalIcon} roundedCircle />
                <Image className="icon" src={DentalIcon} roundedCircle />
              </div>
              <p> Modern Solutions, Timeless Smiles</p>
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="content">
            <div className="row-container">
              <p className="assist-wrapper">ASSISTANCE </p>
              <Image
                className="rounded-icon"
                src={DentalIconColored}
              />
            </div>
          </div>
          <h2>DENTAL </h2>
          <div className="content">
            <div className="content avatar-wrapper">
              <Avatar className="avatar-0" src="https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg" size={100} />
              <Avatar className="avatar-1" src={ButterFlyIcon} size={100} />
            </div>
          </div>

          <h2>CARE </h2>
        </div>
        <div className="row-container">
          <h2>WITH TECHNOLOGY </h2>
          <div className="content">
            <div className="content avatar-wrapper">
              {list && list.map((data) =>
                <Avatar
                  key={data.id}
                  className={`avatar` + 1}
                  stack
                  src={data.url}
                  size={50}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="video-wrapper">

          <div
            className="video-card"

          />
           <Image
                className="video-ic"
                src={YoutubeIcon}
              />
          </div>

        </div>
        <SectionFooter>
          <StartBtn onClick={scrollToNextPage} />
        </SectionFooter>
      </div>
    </div>
  );
};

export default GetStartedSection;
