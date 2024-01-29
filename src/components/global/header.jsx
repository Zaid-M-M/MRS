import React from "react";
import { useEffect } from 'react';
import MRS_Logo from '../../assets/img/header_img/MRS-Logo.svg'
import Search_icon from '../../assets/img/header_img/mrs_search_icon.svg'


export default function Header() {
    useEffect(() => { 

        
    })



    return (
        <>
        <div className="section hdr-sec desktop-menu">
                <div className="main-container width-1250 flex head-container" data-aos="fade-in" data-aos-duration="500" data-aos-once="true">
                    <div className="clm-2 hdr-clm1">
                        <a href="/"><img src={MRS_Logo} alt="MRS_Logo" /></a>
                    </div>

                    <div className="clm-2 hdr-clm2">
                        <div className="head-links">
                            <a href="/about">About Us</a>
                            <div className="has-sub-menu">
                                <a href="#">Service</a>
                                <ul className="sub-menu">
                                    <li><a href="/services/multiuser-warehousing">Built to Suit Warehousing</a></li>
                                    <li><a href="/services/multiuser-warehousing">Multiuser Warehousing</a></li>
                                    <li><a href="/services/multiuser-warehousing">Customs Bonded Warehouse</a></li>
                                    <li><a href="/services/multiuser-warehousing">In-Plant Warehouse Management</a></li>
                                </ul>
                            </div>
                            <a href="#">Sectors</a>
                            <a href="#">Media Center</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <img src={Search_icon} alt="Search_icon" />
                        </div>
                    </div>

                </div>
        </div>  



        <div className="section hdr-sec mob-menu">
                <div className="main-container width-1250 flex head-container" data-aos="fade-in" data-aos-duration="500" data-aos-once="true">

                    <div className="clm-2 mob-clm1">
                        <a href="/"><img src={MRS_Logo} alt="MRS_Logo" /></a>
                    </div>
                    
                    <div className ="clm-2 mob-clm2">                
                        <nav role="navigation">
                            <div id="menuToggle">
                            <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                            <ul id="menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/services/multiuser-warehousing">Multiuser Warehousing</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            </div>
                        </nav>
                    </div>
                </div>
        </div>     
        </>
    )
}