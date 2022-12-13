import { useState } from "react";
import { Link } from "react-router-dom";

import { AccountModal } from "../../other/AccountModal";
import { IndividualUserNavLinks } from "./links/IndividualUserNavLinks";
import { ProviderUserNavLinks } from "./links/ProviderUserNavLinks";

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
            <ProviderUserNavLinks />
          ) : (
            <IndividualUserNavLinks />
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
