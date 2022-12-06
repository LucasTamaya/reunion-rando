import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export const AccountModal: React.FC = () => {
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative">
      <span
        className="cursor-pointer"
        onClick={() => setShowAccountModal((prev) => !prev)}
      >
        Mon compte
      </span>
      <AnimatePresence>
        {showAccountModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-16 w-72 rounded p-7 bg-main-grey"
          >
            <ul className="flex flex-col gap-y-5">
              <li className="text-white">
                <Link to="/mes-sorties">Mes sorties</Link>
              </li>
              <li className="text-white">
                <Link to="/profile">Modifier mes informations</Link>
              </li>
              <li className="text-white cursor-pointer" onClick={handleLogout}>
                Déconnexion
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
