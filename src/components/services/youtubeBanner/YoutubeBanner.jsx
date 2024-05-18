// import { FaPlay } from 'react-icons/fa'
import './youtubeBanner.scss'
// import { useState } from 'react'

const YoutubeBanner = () => {
    // const [openBanner, setOpenBanner] = useState(true);
  return (
    <div className='youtubeBannerContainer'>
        <div className="YoutubeContentContainer">
                <h1>{"Un point c'est blue"} </h1>
        </div>
        <div className="youtubeContent">
            <iframe  src="https://www.youtube.com/embed/Y2EO2951A3I?si=0j-msqwzwcssdY3x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            {/* {openBanner &&<div className="youtubeBannerImage">
                <h1>
                    SPOT BLUE
                </h1>
                <p>On tue la game !</p>

                <FaPlay className='youtubeIcon' onClick={()=>setOpenBanner(false)} />
            </div>} */}
        </div>
    </div>
  )
}

export default YoutubeBanner