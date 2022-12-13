import { Link } from "react-router-dom";

export const IndividualUserNavLinks: React.FC = () => {
  return (
    <>
      <li className="text-lg text-white font-semibold">
        <Link to="/activites-du-moment">Activités du moment</Link>
      </li>
      <li className="text-lg text-white font-semibold">
        <Link to="/nos-experts-du-terrain">Nos experts du terrain</Link>
      </li>
      <li className="text-lg text-white font-semibold">
        <Link to="/programmer-ma-sortie">Programmer ma sortie</Link>
      </li>
    </>
  );
};
