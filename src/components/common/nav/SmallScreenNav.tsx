import { useState } from "react";
import { Link } from "react-router-dom";

import { LogoutModal } from "@/components/other/LogoutModal";
import { useLogout } from "@/hooks/auth/useLogout";
import { CommonNavLinks } from "./links/CommonNavLinks";
import { ProviderUserNavLinks } from "./links/ProviderUserNavLinks";
import { IndividualUserNavLinks } from "./links/IndividualUserNavLinks";

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

  const handleLogout = () => {
    mutate();
    setShowLogoutModal(false);
  };

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
          <div
            className={
              showNav
                ? "absolute top-0 left-0 w-full h-screen bg-main-green z-10 flex flex-col justify-evenly items-center"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setShowNav(false)}
            >
              <CrossIcon />
            </div>
            <ul className="flex flex-col items-center justify-between gap-y-10 min-h-[250px]">
              {userRole === "prestataire" ? (
                <ProviderUserNavLinks />
              ) : (
                <IndividualUserNavLinks />
              )}
              <CommonNavLinks setShowLogoutModal={setShowLogoutModal} />
            </ul>
            {showLogoutModal ? (
              <LogoutModal
                handleCancel={setShowLogoutModal}
                handleLogout={handleLogout}
                isLoading={isLoading}
              />
            ) : null}
          </div>
        </section>
      </nav>
    </div>
  );
};
