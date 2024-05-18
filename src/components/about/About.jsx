
import  './about.scss';
const About = () => {
  

  return (
    <div className='aboutContainer' name='a-propos'>
      <div className="about">
          <h1>A PROPOS</h1>
          <p>
          blue est une start-up télécom, propulsée par CAMTEL. Notre vision est de lancer la marque la plus numérique, intelligente et simple de l’industrie des télécommunications, pour vos besoins à la maison, au bureau et en mobilité.
          </p>
          <div className="aboutProgressContainer">
              <div className="aboutProgress">
                  <div className="progressTitle">
                    <h3>Illimité</h3>
                    <h3>100%</h3>
                  </div>
                  <div className="progress">
                    <progress value={100} max={100} className='progressInput'/>
                  </div>

              </div>

              <div className="aboutProgress">

                  <div className="progressTitle">
                    <h3>Rapide</h3>
                    <h3>85%</h3>
                  </div>
                  <div className="progress">
                    <progress value={85} max={100} className='progressInput'/>
                  </div>
              </div>
             
              <div className="aboutProgress">

                  <div className="progressTitle">
                    <h3>Tous réseaux</h3>
                    <h3>98%</h3>
                  </div>
                  <div className="progress">
                    <progress  value={98}  max={100} className='progressInput'/>
                  </div>
              </div>

              <div className="aboutProgress">

              <div className="progressTitle">
                <h3>Tout en Un</h3>
                <h3>90%</h3>
              </div>
              <div className="progress">
                <progress value={90}  max={100} className='progressInput'/>
              </div>
              </div>

             
          </div>
     
      </div>
    </div>
  )
}

export default About