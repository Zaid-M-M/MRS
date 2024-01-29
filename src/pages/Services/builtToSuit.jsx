import React, { useEffect } from "react";
import Header from "../../components/global/header";
import Footer from "../../components/global/footer"
import ServicesSpotlight from "../../components/sections/Services/Multiuser-Warehousing/ServicesSpotlight"
import MultiUserAbout from "../../components/sections/Services/Multiuser-Warehousing/multiUserAbout"
import MultiUserBuilt from "../../components/sections/Services/Multiuser-Warehousing/Built-to-Suit"
import CustomBonded from "../../components/sections/Services/Multiuser-Warehousing/CustomsBonded"
import InPlant from "../../components/sections/Services/Multiuser-Warehousing/inPlant"
import MultiWarehousing from "../../components/sections/Services/Multiuser-Warehousing/MultiuserWarehousing"
import Cta from "../../components/sections/About/aboutCTA"
import HomeSuccStory from "../../components/sections/homeSuccStory"


export default function builtToSuit() {

    useEffect (() => {

        function handleAnimation(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1; // Set opacity to 1 when in viewport
              animateText(entry.target);
              observer.unobserve(entry.target); // No need to disconnect the observer
            }
          });
        }
    
        function animateText(target) {
          let split = new SplitType(target, {
            split: 'words, lines'
          });
    
          let tl = gsap.timeline();
          split.lines.forEach(line => {
            tl.from(line.words, {
              opacity: 0,
              y: 40,
              duration: 0.6,
              ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              stagger: 0.1
            });
          });
        }
    
        document.querySelectorAll('.js-split-text').forEach(element => {
          let observer = new IntersectionObserver(handleAnimation, { threshold: 0.5 });
          observer.observe(element);
        });       
        
        AOS.init();

        
 })


  return (
    <>
      
        <Header />
        <ServicesSpotlight />
        <MultiUserAbout />
        <MultiUserBuilt />
        <MultiWarehousing />
        <CustomBonded />
        <InPlant /> 
        <Cta />    
        <HomeSuccStory />   
        <Footer />
      
    </>
  )
}
