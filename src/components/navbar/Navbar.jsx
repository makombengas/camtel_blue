import { useState } from 'react';
import { flagsData, navData } from '../../data/data';
import { allImagesDate } from '../../data/dataImage/dataImage';
import './navbar.scss';
import { BiWorld } from "react-icons/bi";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [openLang, setOpenLang] =useState(false);
    const [openNav, setOpenNav] =useState(false);
    const handleNav =()=>{
        setOpenLang(false)
        setOpenNav(false)
    }
   
    const handleSetActive = (to) => {
        console.log(to);
        setOpenNav(false)
      };
     
      const handleScroll = ()=>{
        setOpenNav(false)
      }; 

  return (
   <div className="navContainer">
        <div className="left" > 
                <Link to="/"
                  spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={300} 
                    onClick={handleScroll}
                >
                <div>
                    <img src={allImagesDate.logoBlue} alt=""  />
                </div>
                </Link>
        </div>
        <div className="burgerMenu" onClick={()=>setOpenNav(!openNav)}>
            <hr className={openNav?'left':""}/>
            <hr className={openNav?'middle':""}/>
            <hr className={openNav ?'right':""} />
        </div>
        <div className={openNav? "handy":"right"}>
            <div className="rightNav" onMouseOver={()=>setOpenLang(false)}>
               <ul>
                  {navData.map(nav=>(
                    <li key={nav.id} onClick={()=>setOpenNav(false)} >
                    <Link 
                        activeClass="active" 
                        to={nav.link} 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={300} 
                        onSetActive={handleSetActive}
                       
                     >
                        {nav.name}
                    </Link>
                    </li>
                  ))}
               </ul>
            </div>
            <div className="language">
            <BiWorld className='langIcon' onMouseOver={()=>setOpenLang(true)} />
           {openLang && <div className="langContainer">
                
                    <img  src={flagsData.france} alt="" onClick={handleNav} />
                        <img  src={flagsData.england} alt="" onClick={handleNav} />
                
            </div>}
            </div>
        </div>
   </div>
  )
}

export default Navbar