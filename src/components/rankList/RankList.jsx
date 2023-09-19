import React from 'react'
import img1 from '../../assets/imagesCircularTeam/img1.jpeg'
import img2 from '../../assets/imagesCircularTeam/img2.jpeg'
import img3 from '../../assets/imagesCircularTeam/img3.jpeg'
import img4 from '../../assets/imagesCircularTeam/img4.jpeg'
import img5 from '../../assets/imagesCircularTeam/img5.jpeg'

import './RankList.css'

const RankList = () => {
  return (
    <div>
        <h3 className='title_RL'>Popular Creator Rank List</h3>
        <div className='box_RL'>
            <div className='list_RL'>
                <div className='imgBx_RL'>
                    <img src={img1} />
                </div>
                <div className='content_RL'>
                    <h2 className='rank_RL'><small>#</small>1</h2>
                    <h4>Alejandra Flanagan</h4>
                    <p>Digital Artist</p>
                </div>
            </div>
            <div className='list_RL'>
                <div className='imgBx_RL'>
                    <img src={img2} />
                </div>
                <div className='content_RL'>
                    <h2 className='rank_RL'><small>#</small>2</h2>
                    <h4>Gisel Figueroa</h4>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className='list_RL'>
                <div className='imgBx_RL'>
                    <img src={img3} />
                </div>
                <div className='content_RL'>
                    <h2 className='rank_RL'><small>#</small>3</h2>
                    <h4>Belen Gonzales</h4>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className='list_RL'>
                <div className='imgBx_RL'>
                    <img src={img4} />
                </div>
                <div className='content_RL'>
                    <h2 className='rank_RL'><small>#</small>4</h2>
                    <h4>Maria Acosta</h4>
                    <p>Backend Developer</p>
                </div>
            </div>
            <div className='list_RL'>
                <div className='imgBx_RL'>
                    <img src={img5} />
                </div>
                <div className='content_RL'>
                    <h2 className='rank_RL'><small>#</small>5</h2>
                    <h4>Benjamin Zurita</h4>
                    <p>Backend Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RankList