import { useEffect, useState } from 'react';
import './scrollTopIcon.scss';
import { IoMdArrowDropupCircle } from "react-icons/io";

const ScrollTopIcon = () => {
    const [scrollOver, setScrollOver] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY<= 100){
                setScrollOver(true);
            }else{
                setScrollOver(false);
            } 
        });
    },[])
    
    const handleScroll = () => {
       window.scrollTo({
        top:0,
        behavior: "smooth",
       })
    };
  return (
    <div className={scrollOver ? "scroll":'scrollTopIconContainer'} onClick={handleScroll}>
        <IoMdArrowDropupCircle />
    </div>
  )
}

export default ScrollTopIcon