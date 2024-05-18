
import './App.scss'
import NotFound from './components/notFound/NotFound';
import AllApp from './components/allApp/AllApp'
import Navbar from './components/navbar/Navbar';
import {Routes, Route, Outlet} from 'react-router-dom'
import Solution from './components/services/solution/Solution';
import Agence from './components/agence/Agence';
import ScrollToTop from './ScrollToTop';
import Footer from './components/footer/Footer';
import ScrollTopIcon from './components/scrollTopIcon/ScrollTopIcon';

function App() {


  return (
    <>
      <div className="app">
        <ScrollTopIcon/>
        <Navbar/>
        <Outlet />
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<AllApp/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route exact path='solution/:id' element={<Solution/>}/>
            <Route exact path='agence/:id' element={<Agence/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
