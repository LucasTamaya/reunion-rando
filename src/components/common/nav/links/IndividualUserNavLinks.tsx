import { Link } from 'react-router-dom';

export const IndividualUserNavLinks: React.FC = () => {
  return (
    <>
      <li className="text-lg text-gray-700 font-semibold">
        <Link to="/activites-du-moment">Activités du moment</Link>
      </li>
      <li className="text-lg text-gray-700 font-semibold">
        <Link to="/nos-experts-du-terrain">Nos experts du terrain</Link>
      </li>
      <li className="text-lg text-gray-700 font-semibold">
        <Link to="/mes-favoris">Mes favoris</Link>
      </li>
    </>
  );
};
