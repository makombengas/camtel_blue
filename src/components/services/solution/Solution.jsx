import { Link, useParams } from 'react-router-dom';

import  './solution.scss';
import { solutionData } from '../../../data/data';

const Solution = () => {
const {id} = useParams();
const solution = solutionData.find(item => item.link === id);


  return (
    <div className='solutionContainer'>
     <div className="solutionContent">
    
     <div className="solution">
        <div className="left">
            <h1>
              {solution.text}
            </h1>
          {solution.data.map(item =>(
            <div className='content' key={item.id}>
                  <p>
                    {item.subText}
                  </p>
                 {item.info && <ul>
                    <li>
                        {item.info}
                    </li>
                  </ul>}
                  <p>
                    {item.subInfo}
                  </p>
              </div>
          ))}
          <Link to={"/"}>
            <button> Go to Homepage </button>
          </Link>
        </div>
        <div className="right">
          {solution.data.map(item =>(
            <div key={item}>
               {item.infoImage.map((info, index)=>(
                <img src={info.image} alt="" key={index} />
               ))}
            </div>
          ))}
        </div>

      </div>
     </div>
    </div>
  )
}

export default Solution