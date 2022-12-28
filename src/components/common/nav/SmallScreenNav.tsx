import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { LogoutModal } from '@/components/other/LogoutModal';
import { useLogout } from '@/hooks/auth/useLogout';
import { CommonNavLinks } from './links/CommonNavLinks';
import { ProviderUserNavLinks } from './links/ProviderUserNavLinks';
import { IndividualUserNavLinks } from './links/IndividualUserNavLinks';
import { UserRoles } from '@/types';

const HamburgerMenuIcon: React.FC = () => {
  return (
    <>
      <span className="block h-0.5 w-8 bg-main-green"></span>
      <span className="block h-0.5 w-8 bg-main-green"></span>
      <span className="block h-0.5 w-8 bg-main-green"></span>
    </>
  );
};

const CrossIcon: React.FC = () => {
  return (
    <svg
      className="h-8 w-8 text-main-green"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-testid="crossIcon"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export const SmallScreenNav: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const { mutate, isLoading, isSuccess } = useLogout();
  const userRole = localStorage.getItem('role') as UserRoles;

  useEffect(() => {
    setShowLogoutModal(false);
    setShowNav(false);
  }, [isSuccess]);

  return (
    <div
      className="flex items-center justify-between bg-white shadow-md p-5"
      data-testid="smallScreenNav"
    >
      <Link to="/">
        <img src="/images/logo.png" alt="logo" width={70} height={70} />
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
                ? 'fixed top-0 left-0 w-full h-screen bg-white z-10 flex flex-col justify-evenly items-center'
                : 'hidden'
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setShowNav(false)}
            >
              <CrossIcon />
            </div>
            <ul className="flex flex-col items-center justify-between gap-y-10 min-h-[250px]">
              {userRole === 'prestataire' ? <ProviderUserNavLinks /> : null}
              {userRole === 'particulier' ? <IndividualUserNavLinks /> : null}
              <CommonNavLinks setShowLogoutModal={setShowLogoutModal} />
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
