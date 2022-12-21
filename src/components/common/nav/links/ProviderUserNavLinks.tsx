import { Link } from 'react-router-dom';

export const ProviderUserNavLinks: React.FC = () => {
  return (
    <>
      <li className="text-lg text-gray-700 font-semibold">
        <Link to="/gerer-mes-activites">Gérer mes activités</Link>
      </li>
      <li className="text-lg text-gray-700 font-semibold">
        <Link to="/nouvelle-activite">Ajouter une activité</Link>
      </li>
      <li className="text-lg text-gray-700 font-semibold">
        <Link to="/demandes-clients">Les demandes de clients</Link>
      </li>
    </>
  );
};
