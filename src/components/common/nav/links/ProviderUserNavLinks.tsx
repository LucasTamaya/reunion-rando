import { Link } from "react-router-dom";

export const ProviderUserNavLinks: React.FC = () => {
  return (
    <>
      <li className="text-lg text-white font-semibold">
        <Link to="/nouvelle-activite">Ajouter une activité</Link>
      </li>
      <li className="text-lg text-white font-semibold">
        <Link to="/gerer-mes-activites">Gérer mes activités</Link>
      </li>
      <li className="text-lg text-white font-semibold">
        <a href="$">Les demandes de clients</a>
      </li>
    </>
  );
};
