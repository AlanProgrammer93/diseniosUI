import './App.css'
import NavbarSearch from './components/navbarSearch/NavbarSearch'
import RangeInputBasic from './components/rangeInputBasic/RangeInputBasic'

function App() {
  return (
    <>
      <RangeInputBasic />
      <div className='App'>
        <NavbarSearch />
      </div>
      
    </>
  )
}

export default App
