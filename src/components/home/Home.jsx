import Carousel from './carousel/Carousel'
import  './home.scss'

// eslint-disable-next-line react/prop-types
const Home = ({openLang, setOpenLang}) => {
  return (
    <div className="homeContainer" name='/'>
        <Carousel setOpenLang={setOpenLang} openLang={openLang} />
    </div>
  )
}

export default Home