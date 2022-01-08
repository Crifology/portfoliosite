import React, {useState} from 'react'
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { InfoSection } from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import { ResumeInfo } from '../components/ResumeSection';
import { Projects } from '../components/ProjectsSection';
import { Footer } from '../components/Footer';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <ResumeInfo {...homeObjTwo} />
            <Projects />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
};
