import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <header className="bg-main-green py-5 px-16">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a className="text-4xl text-white font-semibold" href="$">
              ReunionRando
            </a>
          </li>
          <li>
            <a className="text-lg text-white font-semibold" href="$">
              Sorties du moment
            </a>
          </li>
          <li>
            <a className="text-lg text-white font-semibold" href="$">
              Nos experts du terrain
            </a>
          </li>

          <li>
            <a className="text-lg text-white font-semibold" href="$">
              Programmer ma sortie
            </a>
          </li>
          <li>
            <Link className="text-lg text-white font-semibold" to="/connexion">
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
