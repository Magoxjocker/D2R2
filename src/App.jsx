import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import { MyContext } from './MyContext';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


const urlApi = 'https://rickandmortyapi.com/api/character'

function App() {

  const [dataRickAndMorty, setDataRickAndMorty] = useState([])

  useEffect(() => {
    getRickAndMorty()
  }, [])

  const getRickAndMorty = async () => {
    const response = await fetch(urlApi)
    let { results } = await response.json()
    const data = results.map((dat) => ({
      id: dat.id,
      src: dat.image,
      name: dat.name,
      favorito: false

    }))
    setDataRickAndMorty(data)

  }
  return (
    <div>
      <NavBar />
      <div>
        <MyContext.Provider value={{ dataRickAndMorty, setDataRickAndMorty }}>
          <div className='container'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/favorite' element={<FavoritePage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </MyContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
