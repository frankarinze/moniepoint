import React from "react";
import { useTransition, animated, useTrail } from '@react-spring/web'
import SectionFooter from "../../components/SectionFooter/SectionFooter";
import { StartBtn } from "../../components/CustomBtn/StartBtn";


 const ServicesSection =  ({ scrollToNextPage}) => {
   
  return (
    <div className="section main">
      <h2>Service Section</h2>

      <SectionFooter>
          <StartBtn onClick={scrollToNextPage} />
        </SectionFooter>
    </div>
  );
};

export default ServicesSection;