import React, { useEffect } from 'react';
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import MultiuserWarehousing from '../../../../assets/img/services_img/MultiuserWarehousing/Multiuser-Warehousing.jpg'
import GreyLine from '../../../../assets/img/services_img/MultiuserWarehousing/grey_Line.svg'
import VersatileStorage from '../../../../assets/img/services_img/MultiuserWarehousing/VersatileStorageSolutions.svg'


export default function multiWarehousing () {

    useEffect (() =>  {
        $('.readMore-button').off('click').on('click', function () {
            $('.readMore-button').toggleClass('rotate');
            $('.moretext').slideToggle();
            if ($(this).text() == "Read more") {
                $(this).text("Read less");
            } else {
                $(this).text("Read more");
            }
        });
        
    })
    return (
        <>
        <div className="multiwarehouse section-padd-LR overflow">
            <div className="main-container width-1200 black built-to-suit-container1 multiwar-cont1">     
                <div className='row built-row'>
                    <div className='clm-2 built-img-clm'>
                        <img src={MultiuserWarehousing} alt='Inplant' />
                    </div>
                    <div className='clm-2 built-cntnt-clm'>   
                        <h2 className='ttl-45px'>Multiuser Warehousing</h2>                      
                        <p>At MRS, we present international multi-user warehouses designed with extensive expertise in both B2B and B2C logistics operations across various sectors and goods. Our approach emphasises flexible warehouse space, resource sharing, and process optimization, delivering significant benefits to businesses like yours.</p>                        

                        <div className='moretext'>
                            <p>At MRS, we present international multi-user warehouses designed with extensive expertise in both B2B and B2C logistics operations across various sectors and goods. Our approach emphasises flexible warehouse space, resource sharing, and process optimization, delivering significant benefits to businesses like yours.</p>                         
                        </div>
                        <a className="readMore-button">Read more</a>
                        
                    </div>                    
                </div>                
            </div>
        </div>

        <div className="inPlant-sec2 section-padd-LR overflow">
            <div className="main-container width-1200 black built-to-suit-container1">     
                <h3 className='we-offer-txt advtg-txt blue'>Advantages of Multi-user Warehousing:</h3>
                <img className='built-line-img' src={GreyLine} alt="GreyLine" />     

                <div className='advant-containr'>
                    <div className='advan-bx'>
                        <img src={VersatileStorage} alt='VersatileStorage' />
                        <h4>Versatile Storage Solutions</h4>
                        <p>Whether you require short-term, medium-term, or long-term storage, our Multi-user Warehousing accommodates your unique needs.</p>
                    </div>
                    <div className='advan-bx'>
                        <img src={VersatileStorage} alt='VersatileStorage' />
                        <h4>Versatile Storage Solutions</h4>
                        <p>Whether you require short-term, medium-term, or long-term storage, our Multi-user Warehousing accommodates your unique needs.</p>
                    </div>
                    <div className='advan-bx'>
                        <img src={VersatileStorage} alt='VersatileStorage' />
                        <h4>Versatile Storage Solutions</h4>
                        <p>Whether you require short-term, medium-term, or long-term storage, our Multi-user Warehousing accommodates your unique needs.</p>
                    </div>
                </div>   
                <p className='mob-mrgin-btm-o'>Choose MRS multi-user warehousing to unlock a world of efficiency, flexibility, and cost-effectiveness for your supply chain. Experience shared success in warehousing that adapts to your every requirement.</p>      
            </div>
        </div>
                
            
        </>
    )
}