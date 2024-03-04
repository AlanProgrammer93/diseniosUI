import React, { useState } from 'react'
import './styles.css'

import img1 from '../../assets/imagesCircularTeam/img1.jpeg'
import img2 from '../../assets/imagesCircularTeam/img2.jpeg'
import img3 from '../../assets/imagesCircularTeam/img3.jpeg'
import img4 from '../../assets/imagesCircularTeam/img4.jpeg'
import img5 from '../../assets/imagesCircularTeam/img5.jpeg'
import img6 from '../../assets/imagesCircularTeam/img6.jpeg'
import img7 from '../../assets/imagesCircularTeam/img7.jpeg'
import img8 from '../../assets/imagesCircularTeam/img8.jpeg'

const items = [
  {
    image: img1,
    header: "header1",
    text: "text1"
  },
  {
    image: img2,
    header: "header2",
    text: "text2"
  },
  {
    image: img3,
    header: "header3",
    text: "text3"
  },
  {
    image: img4,
    header: "header4",
    text: "text4"
  },
]

const Accordion = () => {
  const [active, setActive] = useState(0)
  const handlerToggle = (index) => setActive(index)

  return (
    <div className='accordion_ui_container'>
      <section className='accor_image_according'>
        {
          items.map((item, index) => {
            const isActive = active === index ? "accor_active" : ""

            return (
              <article 
                key={item.image} 
                className={`accor_image_accordion_item ${isActive}`}
                onClick={() => handlerToggle(index)}
              >
                <img src={item.image} />
                <div className='accor_content'>
                  <span className='accor_material_symbols_outlined'>
                    photo_camera
                  </span>
                  <div className='accor_info'>
                    <h2>{item.header}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              </article>
            )
          })
        }
      </section>
    </div>
  )
}

export default Accordion