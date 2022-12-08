import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountModal } from "../other/AccountModal";

export const Nav: React.FC = () => {
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false);
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
                <Link to="/gerer-mes-activites">Gérer mes activités</Link>
              </li>
              <li className="text-lg text-white font-semibold">
                <a href="$">Les demandes de clients</a>
              </li>
            </>
          )}

          {userRole ? (
            <li
              className="text-lg text-white font-semibold cursor-pointer"
              onClick={() => setShowAccountModal((prev) => !prev)}
            >
              Mon compte
              {showAccountModal ? <AccountModal /> : null}
            </li>
          ) : (
            <li className="text-lg text-white font-semibold">
              <Link to="/connexion">Connexion</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
