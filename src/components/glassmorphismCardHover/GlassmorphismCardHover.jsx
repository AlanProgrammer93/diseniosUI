import React from 'react'
import img1 from '../../assets/imagesCircularTeam/img1.jpeg'
import img2 from '../../assets/imagesCircularTeam/img2.jpeg'
import img3 from '../../assets/imagesCircularTeam/img3.jpeg'
import img4 from '../../assets/imagesCircularTeam/img4.jpeg'

import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'

import './GlassmorphismCardHover.css'

const GlassmorphismCardHover = () => {
    // #162527 #202011 #5b4510 #611417
  return (
    <div className='container_GCH'>
        <div className='box_GCH' data-color="clr1">
            <div className='imgBx_GCH'>
                <img src={img1} />
            </div>
            <div className='glass_GCH'>
                <h3>Someone<br /><span>SEO Expert</span></h3>
                <ul>
                    <a href='#' style={{ '--i': 1 }}>
                     <FaLinkedin />
                    </a>
                    <a href='#' style={{ '--i': 2 }}>
                        <FaWhatsapp />
                    </a>
                    <a href='#' style={{ '--i': 3 }}>
                        <FaInstagram />
                    </a>
                </ul>
            </div>
        </div>
        <div className='box_GCH' data-color="clr2">
            <div className='imgBx_GCH'>
                <img src={img2} />
            </div>
            <div className='glass_GCH'>
                <h3>Someone<br /><span>SEO Expert</span></h3>
                <ul>
                    <a href='#' style={{ '--i': 1 }}>
                     <FaLinkedin />
                    </a>
                    <a href='#' style={{ '--i': 2 }}>
                        <FaWhatsapp />
                    </a>
                    <a href='#' style={{ '--i': 3 }}>
                        <FaInstagram />
                    </a>
                </ul>
            </div>
        </div>
        <div className='box_GCH' data-color="clr3">
            <div className='imgBx_GCH'>
                <img src={img3} />
            </div>
            <div className='glass_GCH'>
                <h3>Someone<br /><span>SEO Expert</span></h3>
                <ul>
                    <a href='#' style={{ '--i': 1 }}>
                     <FaLinkedin />
                    </a>
                    <a href='#' style={{ '--i': 2 }}>
                        <FaWhatsapp />
                    </a>
                    <a href='#' style={{ '--i': 3 }}>
                        <FaInstagram />
                    </a>
                </ul>
            </div>
        </div>
        <div className='box_GCH' data-color="clr4">
            <div className='imgBx_GCH'>
                <img src={img4} />
            </div>
            <div className='glass_GCH'>
                <h3>Someone<br /><span>SEO Expert</span></h3>
                <ul>
                    <a href='#' style={{ '--i': 1 }}>
                     <FaLinkedin />
                    </a>
                    <a href='#' style={{ '--i': 2 }}>
                        <FaWhatsapp />
                    </a>
                    <a href='#' style={{ '--i': 3 }}>
                        <FaInstagram />
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GlassmorphismCardHover