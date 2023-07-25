import './App.css'
import DashboardResponsive from './components/DashboardResponsive/DashboardResponsive'
import DropdownMenu from './components/dropdownMenu/DropdownMenu'
import NavbarSearch from './components/navbarSearch/NavbarSearch'
import RangeInputBasic from './components/rangeInputBasic/RangeInputBasic'

function App() {
  return (
    <>
      <RangeInputBasic />

      <div className='App' style={{ background: '#3b3b3b' }}>
        <NavbarSearch />
      </div>
      <div className='App' style={{ background: '#2b2b2b' }}>
        <DropdownMenu />
      </div>
      <div className='AppDash' style={{ background: '#f6f6f9' }}>
        <DashboardResponsive />
      </div>
    </>
  )
}

export default App
