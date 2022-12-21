import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useLogout } from '@/hooks/auth/useLogout';
import { LogoutModal } from './LogoutModal';

export const AccountModal: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const { mutate, isLoading } = useLogout();

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 top-20 w-72 rounded p-3 bg-gray-700"
        >
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-semibold p-2 rounded transition hover:bg-slate-500">
              <Link to="/mes-sorties" className="block w-full">
                Mes sorties
              </Link>
            </li>
            <li className="text-white font-semibold p-2 rounded transition hover:bg-slate-500">
              <Link to="/profile" className="block w-full">
                Modifier mes informations
              </Link>
            </li>
            <li
              className="text-white font-semibold cursor-pointer w-full p-2 rounded transition hover:bg-slate-500"
              onClick={() => setShowLogoutModal(true)}
            >
              Déconnexion
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
      {showLogoutModal ? (
        <LogoutModal
          handleCancel={setShowLogoutModal}
          handleLogout={mutate}
          isLoading={isLoading}
        />
      ) : null}
    </>
  );
};
