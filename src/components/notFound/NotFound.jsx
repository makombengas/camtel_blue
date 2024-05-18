import  './notFound.scss';
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <div className="notFound">
      <h1>
        ERREUR 404
      </h1>
      <h2>
      PAGE NON TROUVÉE
      </h2>
      <p>
      {"L'adresse Internet demandée ne fonctionne pas."}
      </p>
      <h3>
      Que faire?
      </h3>
      <p>{"Revenir à la page d'accueil de Blue."} </p>
      <p>Avez-vous des commentaires ou des suggestions? Alors écrivez-nous un e-mail à blue@camtel.cm.</p>
      <Link to="/">
        <button>{"Vers la page d'accueil "} </button>
      </Link>
      </div>
    </div>
  )
}

export default NotFound