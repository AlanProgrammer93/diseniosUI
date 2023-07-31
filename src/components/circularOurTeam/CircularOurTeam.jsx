import React, { useState } from 'react'
import './CircularOurTeam.css'
import img1 from '../../assets/imagesCircularTeam/img1.jpeg'
import img2 from '../../assets/imagesCircularTeam/img2.jpeg'
import img3 from '../../assets/imagesCircularTeam/img3.jpeg'
import img4 from '../../assets/imagesCircularTeam/img4.jpeg'
import img5 from '../../assets/imagesCircularTeam/img5.jpeg'
import img6 from '../../assets/imagesCircularTeam/img6.jpeg'
import img7 from '../../assets/imagesCircularTeam/img7.jpeg'
import img8 from '../../assets/imagesCircularTeam/img8.jpeg'

import { MdFacebook } from 'react-icons/md'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const CircularOurTeam = () => {
    const [showCard, setShowCard] = useState(img1)

    const handlerMouseOver = (id) => {
        setShowCard(id)
    }

  return (
    <div className='container_COT'>
        <div className='icon_COT'>
            <div 
                onMouseOver={() => handlerMouseOver(img1)} 
                className={`imgBx_COT ${showCard == img1 && 'active_COT'}`}
                style={{ '--i': 1 }}
            >
                <img src={img1} />
            </div>
            <div 
                onMouseOver={() => handlerMouseOver(img2)} 
                className={`imgBx_COT ${showCard == img2 && 'active_COT'}`} 
                style={{ '--i': 2 }}
            >
                <img src={img2} />
            </div>
            <div 
                onMouseOver={() => handlerMouseOver(img3)} 
                className={`imgBx_COT ${showCard == img3 && 'active_COT'}`} 
                style={{ '--i': 3 }}
            >
                <img src={img3} />
            </div>
            <div 
                onMouseOver={() => handlerMouseOver(img4)} 
                className={`imgBx_COT ${showCard == img4 && 'active_COT'}`} 
                style={{ '--i': 4 }}
            >
                <img src={img4} />
            </div>
            <div 
                onMouseOver={() => handlerMouseOver(img5)} 
                className={`imgBx_COT ${showCard == img5 && 'active_COT'}`} 
                style={{ '--i': 5 }}
            >
                <img src={img5} />
            </div>
            <div onMouseOver={() => handlerMouseOver(img6)} 
                className={`imgBx_COT ${showCard == img6 && 'active_COT'}`} 
                style={{ '--i': 6 }}
            >
                <img src={img6} />
            </div>
            <div onMouseOver={() => handlerMouseOver(img7)} 
                className={`imgBx_COT ${showCard == img7 && 'active_COT'}`} 
                style={{ '--i': 7 }}
            >
                <img src={img7} />
            </div>
            <div onMouseOver={() => handlerMouseOver(img8)} 
                className={`imgBx_COT ${showCard == img8 && 'active_COT'}`} 
                style={{ '--i': 8 }}
            >
                <img src={img8} />
            </div>
        </div>

        <div className='content_COT'>
            <div className='contentBx_COT active_COT' id='content1'>
                <div className='card_COT'>
                    <div className='imgBx_COT'>
                        <img src={showCard} />
                    </div>
                    <div className='textBx_COT'>
                        <h2>Someone Famous <br /> <span>Product Designer</span></h2>
                        <ul className='sci_COT'>
                            <li><a href='#'>
                                <MdFacebook />
                            </a></li>
                            <li><a href='#'>
                                <FaTwitter />
                            </a></li>
                            <li><a href='#'>
                                <FaInstagram />
                            </a></li>
                            <li><a href='#'>
                                <FaLinkedinIn />
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className='contentBx_COT' id='content2'>
                <div className='card_COT'>
                    <div className='imgBx_COT'>
                        <img src={img2} />
                    </div>
                    <div className='textBx_COT'>
                        <h2>Someone Famous <br /> <span>Product Designer</span></h2>
                        <ul className='sci_COT'>
                            <li><a href='#'>
                                <MdFacebook />
                            </a></li>
                            <li><a href='#'>
                                <FaTwitter />
                            </a></li>
                            <li><a href='#'>
                                <FaInstagram />
                            </a></li>
                            <li><a href='#'>
                                <FaLinkedinIn />
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default CircularOurTeam