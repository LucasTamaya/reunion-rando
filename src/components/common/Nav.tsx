import { Link } from "react-router-dom";
import { AccountModal } from "../other/AccountModal";

export const Nav: React.FC = () => {
  const userRole = localStorage.getItem("role");

  return (
    <header className="bg-main-green py-5 px-16">
      <nav>
        <ul className="flex items-center justify-between">
          <li className="text-4xl text-white font-semibold">
            <Link to="/">ReunionRando</Link>
          </li>
          {userRole === "particulier" ? (
            <>
              <li className="text-lg text-white font-semibold">
                <Link to="/activites-du-moment">Activités du moment</Link>
              </li>
              <li className="text-lg text-white font-semibold">
                <Link to="/nos-experts-du-terrain">Nos experts du terrain</Link>
              </li>

              <li className="text-lg text-white font-semibold">
                <a href="$">Programmer ma sortie</a>
              </li>
            </>
          ) : (
            <>
              <li className="text-lg text-white font-semibold">
                <Link to="/nouvelle-activite">Ajouter une activité</Link>
              </li>
              <li className="text-lg text-white font-semibold">
                <a href="$">Les demandes de clients</a>
              </li>

              <li className="text-lg text-white font-semibold">
                <a href="$">Mes sorties</a>
              </li>
            </>
          )}

          <li className="text-lg text-white font-semibold">
            {userRole ? (
              <AccountModal />
            ) : (
              <Link to="/connexion">Connexion</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
