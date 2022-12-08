import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { useLogout } from "@/hooks/auth/useLogout";
import { LogoutModal } from "./LogoutModal";

export const AccountModal: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const { mutate, isLoading } = useLogout();

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 top-16 w-72 rounded p-7 bg-main-grey"
        >
          <ul className="flex flex-col gap-y-5">
            <li className="text-white font-semibold">
              <Link to="/mes-sorties">Mes sorties</Link>
            </li>
            <li className="text-white font-semibold">
              <Link to="/profile">Modifier mes informations</Link>
            </li>
            <li
              className="text-white font-semibold cursor-pointer"
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
    </div>
  );
};
