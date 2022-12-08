import { useState } from "react";
import { Link } from "react-router-dom";

import { AccountModal } from "../../other/AccountModal";

export const BigScreenNav: React.FC = () => {
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false);
  const userRole = localStorage.getItem("role");

  return (
    <header className="bg-main-green py-5 px-16">
      <nav>
        <ul className="flex items-center justify-between">
          <li className="text-4xl text-white font-semibold">
            <Link to="/">ReunionRando</Link>
          </li>

          {userRole === "prestataire" ? (
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
          ) : (
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
          )}

          {userRole ? (
            <li
              className="text-lg text-white font-semibold cursor-pointer"
              onClick={() => setShowAccountModal((prev) => !prev)}
            >
              Mon compte
            </li>
          ) : (
            <li className="text-lg text-white font-semibold">
              <Link to="/connexion">Connexion</Link>
            </li>
          )}
        </ul>
      </nav>
      {showAccountModal ? <AccountModal /> : null}
    </header>
  );
};
