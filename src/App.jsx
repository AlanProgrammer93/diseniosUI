import { useState } from 'react'
import './App.css'
import DashboardResponsive from './components/DashboardResponsive/DashboardResponsive'
import AnimatedGlassmorphismLoginRegistration from './components/animatedGlassmorphismLoginRegistration/AnimatedGlassmorphismLoginRegistration'
import CircularOurTeam from './components/circularOurTeam/CircularOurTeam'
import DropdownMenu from './components/dropdownMenu/DropdownMenu'
import GlassmorphismCardHover from './components/glassmorphismCardHover/GlassmorphismCardHover'
import Loading from './components/loading/Loading'
import LoginAnimated from './components/loginAnimated/LoginAnimated'
import NavbarSearch from './components/navbarSearch/NavbarSearch'
import RangeInputBasic from './components/rangeInputBasic/RangeInputBasic'
import RankList from './components/rankList/RankList'
import GroceryListApp from './components/groceryListApp/GroceryListApp'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'
import GlowingCheckbox from './components/GlowingCheckbox'

function App() {
  const [background, setBackground] = useState(true)

  return (
    <>
    <div className={`AppAnimatedLogin ${background ? '' : 'signup_AGL'} `} >
        <AnimatedGlassmorphismLoginRegistration setBackground={setBackground} />
      </div>
      <div className='AppDash' style={{ background: '#f6f6f9' }}>
        <DashboardResponsive />
      </div>
      <div className='AppDash' style={{ background: '#2b2b2b' }}>
        <RangeInputBasic />
      </div>
      <div className='App' style={{ background: '#3b3b3b' }}>
        <NavbarSearch />
      </div>
      <div className='App' style={{ background: '#2b2b2b' }}>
        <DropdownMenu />
      </div>
      <div className='AppCOT' style={{ background: '#3b3b3b' }}>
        <CircularOurTeam />
      </div>
      <div className='AppCOT' style={{ background: '#2b2b2b' }}>
        <LoginAnimated />
      </div>
      <div className='AppCOT' style={{ background: '#f5f5f5' }}>
        <RankList />
      </div>
      <div className='AppGCH'>
        <GlassmorphismCardHover />
      </div>
      <div className='AppCOT' style={{ background: '#001d10' }} >
        <Loading />
      </div>
      <div className='AppGLA'>
        <GroceryListApp />
      </div>
      <div className='AppCOT' >
        <Carousel />
      </div>
      <div className='AppCOT' style={{ background: '#3b3b3b' }}>
        <Accordion />
      </div>
      <div className='AppCOT' style={{ background: '#333' }}>
        <GlowingCheckbox />
      </div>
    </>
  )
}

export default App
