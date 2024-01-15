import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import HeroSection from "../sections/HeroSection/HeroSection";
import GetStartedSection from "../sections/GetStartedSection/GetStartedSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import AppNavBar from "../components/Nav/AppNavBar";
import { useInView } from "react-intersection-observer";

import "./home.css";

const sections = [
    { id: 0, component: <HeroSection /> },
    { id: 1, component: <GetStartedSection /> },
    { id: 2, component: <ServicesSection /> },
];

const Home = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [{ y }, set] = useSpring(() => ({ y: -currentSection * window.innerHeight }));


    useEffect(() => {
        set({ y: -currentSection * window.innerHeight });
    }, [currentSection, set]);

    const scrollToNextPage = () => {
        setCurrentSection((prevPage) => (prevPage < sections.length - 1 ? prevPage + 1 : 0));
    };

    const [ref, isOnSection] = useInView({
        // triggerOnce: true,
        rootMargin: "-50px"
    });

    return (
        <div className="container">
            <AppNavBar />
            {sections.map((section, index) => (
                <animated.div
                    key={section.id}
                    style={{
                        height: "100vh",
                        width: "100%",
                        transform: y.interpolate((yy) => `translate3d(0, ${yy}px, 0)`),
                    }}
                    ref={ref}
                >
                    {React.cloneElement(section.component, {
                        scrollToNextPage,
                        isOnSection,
                        ref
                    })}
                </animated.div>
            ))}

            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                {sections.map((section, index) => (
                    <Button key={section.id} onClick={() => setCurrentSection(index)}>
                        Section {section.id}
                    </Button>
                ))}

                <Button onClick={scrollToNextPage}>Scroll</Button>
            </div>
        </div >
    );
};

export default Home;
