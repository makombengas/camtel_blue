import { FaSearch } from 'react-icons/fa';
import { solutionData } from '../../data/data';
import  './blue.scss';
import { Link } from 'react-router-dom';
import YoutubeBanner from '../services/youtubeBanner/YoutubeBanner';

const Blue = () => {
  return (
    <div className='blueContainer' name='blue' >
        <div className="solutionsContainer">
                <h1>Solutions</h1>
                <div className="solution">
                    {solutionData.map(item =>(
                       <div className="solutionImage" key={item.id}>
                            <img src={item.image} alt="" />
                       <Link to={`solution/${item.link}`}>
                            <div className="solutionContent">
                                <FaSearch className='solutionIcon' />
                                <h3>{item.text} </h3>
                            </div>
                       </Link>
                        </div>
                    ))}
                </div>
            </div>
               <div className="blueYoutube">
                   <YoutubeBanner/>
               </div>
    </div>
  )
}

export default Blue