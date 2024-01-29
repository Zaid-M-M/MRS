import React from "react";
import { useEffect } from "react";
import '../../assets/css/home.css';
import treva from '../../assets/img/home_img/logos/treva.svg'
import hexa from '../../assets/img/home_img/logos/hexa.svg'
import aven from '../../assets/img/home_img/logos/aven.svg'
import warhol from '../../assets/img/home_img/logos/warhol.svg'
import fusionDynamic from '../../assets/img/home_img/logos/fusionDynamic.svg'
import Fox_hub from '../../assets/img/home_img/logos/Fox_hub.svg'
import aeroDynamic from '../../assets/img/home_img/logos/aeroDynamic.svg'
import swiftagro from '../../assets/img/home_img/logos/swiftagro.svg'
import circle from '../../assets/img/home_img/logos/circle.svg'
import medconnect from '../../assets/img/home_img/logos/medconnect.svg'
import Quntaum_Electronics from '../../assets/img/home_img/logos/Quntaum_Electronics.svg'
import first_Company_in_Kutch from '../../assets/img/home_img/first_Company_in_Kutch.png'
import white_Arrow from '../../assets/img/home_img/white_Arrow.svg'



export default function HomeClients () {

    useEffect (() =>  {
        var swiper1 = new Swiper(".client-sldr", {
            slidesPerView: 4.5,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 3500,
            breakpoints: {
                320: {
                  slidesPerView: 2.1,
                },
                768: {
                  slidesPerView: 3.1,
                },
                1024: {
                    slidesPerView: 4.5,
                  },
            }
        });

        var swiper2 = new Swiper(".client-sldr2", {
            slidesPerView: 4.1,
            spaceBetween: 0,
            loop: true,            
            autoplay: {
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false,
            },
            speed: 3500,
              breakpoints: {
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3.1,
                },
                1024: {
                    slidesPerView: 4.5,
                  },
            }
        });

        
        
    })
    return (
        <>
        <div className="client-sec section-padd-LR">
                <div className="main-container">
                    <div className="ovrflw-hdn">
                        <h2 className="black js-split-text">Our Clients</h2>
                    </div>
                    <p className="client-para black" data-aos="fade-up" data-aos-duration="700" data-aos-once="true" data-aos-delay="1000">Trusted by industry leaders for customized supply chain excellence worldwide.</p>
                </div> 
                        <div className="swiper client-sldr" data-aos="fade-in" data-aos-duration="700" data-aos-once="true" data-aos-delay="1400">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={treva} alt="treva" />                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={hexa} alt="aven" />                                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={aven} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={warhol} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={fusionDynamic} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Fox_hub} alt="aven" />                                      
                                    </div>
                                    {/* Repeat Slide */}
                                    <div className="swiper-slide">
                                        <img src={treva} alt="treva" />                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={hexa} alt="aven" />                                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={aven} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={warhol} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={fusionDynamic} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Fox_hub} alt="aven" />                                      
                                    </div>
                                </div>
                        </div>

                        <div className="swiper client-sldr2" data-aos="fade-in" data-aos-duration="700" data-aos-once="true" data-aos-delay="1600">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={aeroDynamic} alt="treva" />                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={swiftagro} alt="aven" />                                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={circle} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={medconnect} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Quntaum_Electronics} alt="aven" />                                      
                                    </div>
                                    
                                    {/* Repeat Slide */}
                                    <div className="swiper-slide">
                                        <img src={aeroDynamic} alt="treva" />                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={swiftagro} alt="aven" />                                    
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={circle} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={medconnect} alt="aven" />                                      
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Quntaum_Electronics} alt="aven" />                                      
                                    </div>
                                </div>
                        </div>

                <div className="main-container client-main-container2 width-1250" data-aos="fade-in" data-aos-duration="800" data-aos-once="true">
                    <div className="client-img-bx">
                        <img className="first_Company-img" src={first_Company_in_Kutch} alt="1st_Company_in_Kutch"/>
                        <div className="client-contnt-bx">
                            <h2 className="white ttl-60px" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="400">We are the 1st Company in Kutch to use RFID & Blockchain Cargo Saftey for its Last Mile Delivery for cargo safety and real time visibility!</h2>
                            <div className="client-btn" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="600">
                                    <a href="#">Elevate Your<br/>Supply Chain Today <img src={white_Arrow} alt="Arrow" /></a>
                            </div>
                            
                        </div>                        
                    </div>
                </div> 

                                          
        </div>
        </>
    )
}