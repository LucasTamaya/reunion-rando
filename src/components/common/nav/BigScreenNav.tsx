import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AccountModal } from '../../other/AccountModal';
import { IndividualUserNavLinks } from './links/IndividualUserNavLinks';
import { ProviderUserNavLinks } from './links/ProviderUserNavLinks';
import { UserRoles } from '@/types';

export const BigScreenNav: React.FC = () => {
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false);
  const userRole = localStorage.getItem('role') as UserRoles;

  return (
    <header className="bg-white shadow-md py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <ul className="flex items-center gap-x-10">
          {userRole === 'prestataire' ? <ProviderUserNavLinks /> : null}
          {userRole === 'particulier' ? <IndividualUserNavLinks /> : null}
          {userRole ? (
            <li
              className="text-lg text-main-green font-semibold cursor-pointer"
              onClick={() => setShowAccountModal((prev) => !prev)}
            >
              Mon compte
            </li>
          ) : (
            <li className="text-lg text-main-green font-semibold">
              <Link to="/connexion">Connexion</Link>
            </li>
          )}
        </ul>
      </nav>
      {showAccountModal ? <AccountModal /> : null}
    </header>
  );
};
