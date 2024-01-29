import React from "react";
import '../../../../assets/css/about.css'   
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import Line from '../../../../assets/img/home_img/Line.svg'
import Warehousing_Solution from '../../../../assets/img/services_img/MultiuserWarehousing/Warehousing_Solution.jpg'


export default function ServicesSpotlight () {
    return (
        <>
        <div className="service-spotlight section inner-spotlight-sec section-padd-LR overflow" >
            <div className="main-container width-1250 flex">
                <div className="inner-spot-clm-1">
                    <h1 className="white">Your Warehousing Solution</h1>
                    <h2 className="sldr-sub-ttl">Dependable. Streamlined.</h2>
                    <img src={Line} alt="Line" />
                    <p className="white">Seamless warehousing solutions designed to meet the diverse needs of your business.</p>
                    <a className="btn inner-spt-btn white" href="#">Home {' > '} Services {' > '} Warehousing Solutions</a>
                </div>                
            </div>
            <div className="inner-img-sec">                
                <div className="inner-spot-clm-2">
                    <img src={Warehousing_Solution} alt="supplyChainImage" />
                </div>
            </div>

        </div>
        
        </>
    )
}