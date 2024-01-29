import React from "react";
import message_icon from '../../assets/img/footer_img/message_icon.svg'
import { useEffect } from 'react';

export default function Footer() {

    useEffect(() => {

        if (!$('.marquee').data('isMarqueeInitialized')) {
            $('.marquee').data('isMarqueeInitialized', true);
          
            $('.marquee').marquee({
              //speed in milliseconds of the marquee
              duration: 9000,
              //gap in pixels between the tickers
              gap: 50,
              //time in milliseconds before the marquee will start animating
              delayBeforeStart: 0,
              //'left' or 'right'
              direction: 'left',
              //true or false - should the marquee be duplicated to show an effect of continuous flow
              duplicated: true
            });
        }

    })

    return(
        <>
        <div className="section footer-sec section-padd-LR">
                <div className="main-container width-1200 flex foo-contanr">
                <div className="clm-2 footr-clm1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" data-aos-delay="100" data-aos-once="true">
                    <img src={message_icon} alt="message_icon" data-aos="fade-in" data-aos-duration="500" data-aos-once="true"/>
                    <h2 className="white subscribe-txt js-split-text">Subscribe to<br />Newsletters</h2>
                    <p className="white" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="800">Want to stay up to date? <br />Sign up for MRS’s biannual update </p>
                    <form data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1100">
                        <div className="email">
                            <label className="form__label hide">Email </label>
                            <input  type="email" id="email" className="form__input" placeholder="Enter your email"/>
                        </div>
                        <button type="submit" className="submit-btn">Subscribe</button>
                    </form>
                </div>
                <div className="clm-2 footr-clm2">
                    <div className="foo-links">
                        <a href="#" className="js-split-text delay-3s">Home.</a>
                        <a href="#" className="js-split-text delay-4s">Service.</a>
                        <a href="#" className="js-split-text delay-5s">Sectors.</a>
                        <a href="#" className="js-split-text delay-6s">Media Center.</a>
                        <a href="#" className="js-split-text delay-7s">Careers.</a>
                        <a href="#" className="js-split-text delay-8s">Contact.</a>
                    </div>

                    <div className="foo-innr-container">
                        <div className="clm-2">
                            <h6 className="white js-split-text delay-6s">Head Office</h6>
                            <p data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="900">MRS Towers, Plot No-20, Sector – 44, Gurgaon -122001, Haryana,India</p>
                            <p className="site-credit" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="900">© 2023, MRS Supply Chain. All Rights Reserved.</p>
                        </div>
                        <div className="clm-2 foo-innr-clm2">
                            <h6 className="white js-split-text delay-7s">Email</h6>
                            <a href="mailto:Info@mrssupplychain.in" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="900">Info@mrssupplychain.in</a>

                            <h6 className="white phone js-split-text delay-8s">Phone</h6>
                            <a href="tel:0124 674 0200" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1000">0124 674 0200</a>
                            <div className="foo-bottom-links">
                                <a href="#" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="950">Legal Notice</a>
                                <a href="#" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1000">Privacy Policy</a>
                                <a href="#" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1100">Linkedin</a>
                            </div>
                        </div>
                    </div>

                </div>
                </div>        
        </div>

        <div className="section bottom-footer-sec">
            <div className="main-container">
                <h2 className="marquee">We are the 1st Company in Kutch to Provide Single Largest Warehouse of Grade A category</h2>
            </div>
        </div>
        </>
    )
}