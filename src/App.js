import './App.css';
import Navbar from './componets/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallary from './pages/Gallary';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Footer from './componets/Footer/Footer';
import Wedding from './pages/Wedding';
import Event36 from './pages/Event36';
import NavbarMenu from './componets/NavbarMenu/NavbarMenu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} >
            {/* <Route path='wedding' element={<Wedding />} /> */}
          </Route>

          <Route path='/gallary' element={<Gallary />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/events/wedding' element={<Wedding />} />
          <Route path='/events/36' element={<Event36 />} />
          <Route path='/navbar' element={<NavbarMenu />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div >
  );
}

export default App;
