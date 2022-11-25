import { Link } from "react-router-dom";
import { AccountModal } from "../AccountModal";

export const Nav: React.FC = () => {
  const userRole = localStorage.getItem("role");

  return (
    <header className="bg-main-green py-5 px-16">
      <nav>
        <ul className="flex items-center justify-between">
          <li className="text-4xl text-white font-semibold">
            <a href="$">ReunionRando</a>
          </li>
          <li className="text-lg text-white font-semibold">
            <a href="$">Sorties du moment</a>
          </li>
          <li className="text-lg text-white font-semibold">
            <a href="$">Nos experts du terrain</a>
          </li>

          <li className="text-lg text-white font-semibold">
            <a href="$">Programmer ma sortie</a>
          </li>

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
