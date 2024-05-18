
import './allApp.scss';
import Home from "../home/Home";
import About from "../about/About";
import Blue from "../blue/Blue";
import Services from '../services/Services';
import NosAgences from '../nosAgences/NosAgences';
import Contact from '../contact/Contact';
const AllApp = () => {
  return (
    <div >
        <Home/>
        <About/>
        <Services/>
        <Blue/>
        <NosAgences/>
        <Contact/>

    </div>
  )
}

export default AllApp