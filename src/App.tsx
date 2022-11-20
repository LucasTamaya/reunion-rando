import { Routes, Route } from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";
import { ConnexionScreen } from "./screens/ConnexionScreen";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/connexion" element={<ConnexionScreen />} />
    </Routes>
  );
};
