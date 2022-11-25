import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AccountModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="relative">
      <span
        className="cursor-pointer"
        onClick={() => setShowModal((prev) => !prev)}
      >
        Mon compte
      </span>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-16 w-72 rounded p-7 bg-[#3e363f]"
          >
            <ul className="flex flex-col gap-y-5">
              <li className="text-white">
                <a href="$">Mes sorties</a>
              </li>
              <li className="text-white">
                <a href="$">Modifier mes informations</a>
              </li>
              <li className="text-white">
                <a href="$">Déconnexion</a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
