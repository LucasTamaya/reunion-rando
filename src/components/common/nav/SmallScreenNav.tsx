import { LogoutModal } from "@/components/other/LogoutModal";
import { useLogout } from "@/hooks/auth/useLogout";
import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenuIcon: React.FC = () => {
  return (
    <>
      <span className="block h-0.5 w-8 bg-white"></span>
      <span className="block h-0.5 w-8 bg-white"></span>
      <span className="block h-0.5 w-8 bg-white"></span>
    </>
  );
};

const CrossIcon: React.FC = () => {
  return (
    <svg
      className="h-8 w-8 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export const SmallScreenNav: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const { mutate, isLoading } = useLogout();
  const userRole = localStorage.getItem("role");
  const SHOW_NAV_STYLE =
    "block absolute top-0 left-0 w-full h-screen bg-main-green z-10 flex flex-col justify-evenly items-center";

  return (
    <div className="flex items-center justify-between bg-main-green py-5 px-10">
      <Link className="text-2xl sm:text-4xl text-white font-semibold" to="/">
        ReunionRando
      </Link>
      <nav>
        <section className="flex">
          <div
            className="space-y-2"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <HamburgerMenuIcon />
          </div>

          <div className={showNav ? SHOW_NAV_STYLE : "hidden"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setShowNav(false)}
            >
              <CrossIcon />
            </div>
            <ul className="flex flex-col items-center justify-between gap-y-10 min-h-[250px]">
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
                    <Link to="/nos-experts-du-terrain">
                      Nos experts du terrain
                    </Link>
                  </li>
                  <li className="text-lg text-white font-semibold">
                    <Link to="/programmer-ma-sortie">Programmer ma sortie</Link>
                  </li>
                </>
              )}

              {userRole ? (
                <>
                  <li className="text-lg text-white font-semibold">
                    <Link to="/mes-sorties">Mes sorties</Link>
                  </li>
                  <li className="text-lg text-white font-semibold">
                    <Link to="/profile">Modifier mes informations</Link>
                  </li>
                  <li
                    className="text-lg text-white font-semibold cursor-pointer"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    Déconnexion
                  </li>
                </>
              ) : (
                <li className="text-lg text-white font-semibold">
                  <Link to="/connexion">Connexion</Link>
                </li>
              )}
            </ul>
            {showLogoutModal ? (
              <LogoutModal
                handleCancel={setShowLogoutModal}
                handleLogout={mutate}
                isLoading={isLoading}
              />
            ) : null}
          </div>
        </section>
      </nav>
    </div>
  );
};
