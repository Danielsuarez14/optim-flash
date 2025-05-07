import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Lobby from './pages/Lobby.jsx'
import AboutUs from './pages/AboutUs.jsx'
import WhoAreWe from './pages/WhoAreWe.jsx'
import Mission from './pages/Mission.jsx'
import Vision from './pages/Vision.jsx'
import Offer from './pages/Offer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path='/offer' element={<Offer/>}/>
          <Route path='/who' element={<WhoAreWe/>}/>
          <Route path='/mission' element={<Mission/>}/>
          <Route path='/vision' element={<Vision/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
